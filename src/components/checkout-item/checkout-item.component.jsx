import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {removeItemFromCart, removeItem, addItem} from '../../redux/cart/cart.actions';
import {CheckoutItemContainer, ImageContainer, Image, Name, Quantity, Arrow, Value, Price, RemoveButton} from './checkout-item.styles';
const CheckoutItem = ({cartItem, clearItem, removeExistingItem, addQuantityToExistingItem}) => (
  <CheckoutItemContainer>
    <ImageContainer>
      <Image src={cartItem.imageUrl} alt="item" />
    </ImageContainer>
    <Name>{cartItem.name}</Name>
    <Quantity>
      <Arrow onClick={() => removeExistingItem(cartItem)}>
        &#10094;
      </Arrow>
      <Value>{cartItem.quantity}</Value>
      <Arrow onClick={() => addQuantityToExistingItem(cartItem)}>
        &#10095;
      </Arrow>
    </Quantity>
    <Price>{cartItem.price}</Price>
    <RemoveButton onClick={() => clearItem(cartItem)}>
      &#10005;
    </RemoveButton>
  </CheckoutItemContainer>
);

// PropTypes velidation
CheckoutItem.propTypes = {
  cartItem: PropTypes.object,
  clearItem: PropTypes.func,
  removeExistingItem: PropTypes.func,
  addQuantityToExistingItem: PropTypes.func,
};
const mapDispatchToProps = (dispatch) => ({
  clearItem: (item) => dispatch(removeItemFromCart(item)),
  removeExistingItem: (item) => dispatch(removeItem(item)),
  addQuantityToExistingItem: (item) => dispatch(addItem(item)),
});
export default connect(null, mapDispatchToProps)(CheckoutItem);
