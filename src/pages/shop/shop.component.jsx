import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import CollectionPage from '../collection/collection.component';
import { updateCollections } from '../../redux/shop/shop.actions';
import { firestore, convertCollectionsSnapshotToCollectionObj } from '../../firebase/firebase.utils';
class ShopPage extends React.Component {
  unsubscribeFromSnapshot = null;
  componentDidMount() {
    const { updateCollections } = this.props;
    const collectionRef = firestore.collection('collections');
    collectionRef.onSnapshot(async(snapshot) => {
      let collectionsObject = convertCollectionsSnapshotToCollectionObj(snapshot);
      updateCollections(collectionsObject);
    });
  }
  render() {
    const {match} = this.props;
    return (
      <div >
        <Route exact path={`${match.path}`} component={CollectionsOverview} />
        <Route exact path={`${match.path}/:collectionId`} component={CollectionPage} />
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
