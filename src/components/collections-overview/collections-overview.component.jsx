import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectShopCollectionForPreview } from '../../redux/shop/shop.selector';
import './collections-overview.style.scss';
import CollectionPreview from '../collection-preview/collection-preview.component';
const CollectionsOverview = ({ collections }) => (
  <div className="collections-overview">
    {collections.map(({ id, ...otherCollectionProps }) => (
      <CollectionPreview key={id} {...otherCollectionProps} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  collections: selectShopCollectionForPreview
});

export default connect(mapStateToProps)(CollectionsOverview);
