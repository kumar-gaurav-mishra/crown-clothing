import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {createStructuredSelector} from 'reselect';
import {selectShopCollectionForPreview} from '../../redux/shop/shop.selector';
import {CollectionOverviewContainer} from './collection-overview.styles';
import CollectionPreview from '../collection-preview/collection-preview.component';
const CollectionsOverview = ({collections}) => (
  <CollectionOverviewContainer>
    {collections.map(({id, ...otherCollectionProps}) => (
      <CollectionPreview key={id} {...otherCollectionProps} />
    ))}
  </CollectionOverviewContainer>
);
// PropTypes Velidation
CollectionsOverview.propTypes = {
  collections: PropTypes.array,
};
const mapStateToProps = createStructuredSelector({
  collections: selectShopCollectionForPreview,
});

export default connect(mapStateToProps)(CollectionsOverview);
