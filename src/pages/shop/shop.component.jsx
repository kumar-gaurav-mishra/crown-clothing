import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import CollectionPage from '../collection/collection.component';
import { updateCollections } from '../../redux/shop/shop.actions';
import { firestore, convertCollectionsSnapshotToCollectionObj } from '../../firebase/firebase.utils';
import WithSpinner from '../../components/with-spinner/with-spinner.component';
const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);
class ShopPage extends React.Component {
  state = {
    loading: true,
  }
  unsubscribeFromSnapshot = null;
  componentDidMount() {
    const { updateCollections } = this.props;
    const collectionRef = firestore.collection('collections');
    collectionRef.onSnapshot(async(snapshot) => {
      let collectionsObject = convertCollectionsSnapshotToCollectionObj(snapshot);
      updateCollections(collectionsObject);
      this.setState({ loading: false });
    });
  }
  render() {
    const {match} = this.props;
    return (
      <div >
        <Route exact path={`${match.path}`} render={(props) => <CollectionsOverviewWithSpinner isLoading={this.state.isLoading} {...props}/>} />
        <Route exact path={`${match.path}/:collectionId`} render={(props) => <CollectionPageWithSpinner isLoading={this.state.isLoading} {...props}/>}  />
      </div>
    );
  }
};
// PropTypes Velidation
ShopPage.propTypes = {
  match: PropTypes.object,
  history: PropTypes.object,
};
const mapDispatchToProps = dispatch => ({
  updateCollections: collectionsObject => dispatch(updateCollections(collectionsObject))
})
export default connect(null, mapDispatchToProps)(ShopPage);
