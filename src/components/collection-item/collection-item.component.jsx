import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {addItem} from '../../redux/cart/cart.actions';
import {CollectionItemContainer, ItemImage, CollectionFooter, Name, Price, CustomButtonContainer} from './collection-item.styles';
const CollectionItem = ({item, addItem}) => {
  const {name, imageUrl, price} = item;
  return (
    <CollectionItemContainer>
      <ItemImage
        style={{
          backgroundColor: `rgb(${Math.floor(Math.random() * 255 + 1)}, ${Math.floor(Math.random() * 255 + 1)}, ${Math.floor(Math.random() * 255 + 1)})`,
          backgroundImage: `url(${imageUrl})`,
        }}></ItemImage>
      <CollectionFooter>
        <Name>{name}</Name>
        <Price>{price}</Price>
      </CollectionFooter>
      <CustomButtonContainer onClick={() => addItem(item)} inverted>
        ADD TO CART
      </CustomButtonContainer>
    </CollectionItemContainer>
  );
};
// Prop Types Velidation
CollectionItem.propTypes = {
  item: PropTypes.object,
  addItem: PropTypes.func,
};
const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});
export default connect(null, mapDispatchToProps)(CollectionItem);
