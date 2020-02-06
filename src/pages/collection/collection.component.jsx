import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {selectCollection} from '../../redux/shop/shop.selector';
import {CollectionPageContainer, Title, Items, CollectionItemContainer} from './collection.styles';

const CollectionPage = ({collection}) => {
  const {items, title} = collection;
  return (
    <CollectionPageContainer>
      <Title>{title}</Title>
      <Items>
        {items.map((item) => (
          <CollectionItemContainer key={item.id} item={item} />
        ))}
      </Items>
    </CollectionPageContainer>
  );
};
// PropTypes Velidation
CollectionPage.propTypes = {
  collection: PropTypes.array,
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state),
});

export default connect(mapStateToProps)(CollectionPage);
