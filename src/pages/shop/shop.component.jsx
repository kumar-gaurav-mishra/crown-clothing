import React from 'react';
import {Route} from 'react-router-dom';
import PropTypes from 'prop-types';
import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import CollectionPage from '../collection/collection.component';
const ShopPage = ({match, history}) => {
  console.log('history : ', history);
  console.log('shop page:', match);
  return (
    <div >
      <Route exact path={`${match.path}`} component={CollectionsOverview} />
      <Route exact path={`${match.path}/:collectionId`} component={CollectionPage} />
    </div>
  );
};
// PropTypes Velidation
ShopPage.propTypes = {
  match: PropTypes.object,
  history: PropTypes.object,
};
export default ShopPage;
