import React from 'react';
import {Route} from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import CollectionsOverviewContainer from '../../components/collections-overview/collections-overview.container';
import CollectionContainer from '../collection/collection.container';
import {fetchCollectionsStartAsync} from '../../redux/shop/shop.actions';
class ShopPage extends React.Component {
  componentDidMount() {
    const {fetchCollectionsStartAsync} = this.props;
    fetchCollectionsStartAsync();
  }
  render() {
    const {match} = this.props;
    return (
      <div >
        <Route exact path={`${match.path}`} component={CollectionsOverviewContainer} />
        <Route exact path={`${match.path}/:collectionId`} component={CollectionContainer} />
      </div>
    );
  }
};
// PropTypes Velidation
ShopPage.propTypes = {
  match: PropTypes.object,
  history: PropTypes.object,
  fetchCollectionsStartAsync: PropTypes.func,
};
const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync()),
});
export default connect(null, mapDispatchToProps)(ShopPage);
