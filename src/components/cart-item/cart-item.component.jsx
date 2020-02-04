import React from 'react';
import PropTypes from 'prop-types';
import {CartItemContainer, ItemDetailsContainer, Name, Price, ImageContainer} from './cart-item.styles';

const CartItem = ({item: {imageUrl, price, name, quantity}}) => (
  <CartItemContainer>
    <ImageContainer src={imageUrl} alt="item" />
    <ItemDetailsContainer>
      <Name>{name}</Name>
      <Price>
        {quantity} x ${price}
      </Price>
    </ItemDetailsContainer>
  </CartItemContainer>
);
// Prop Types Velidation
CartItem.propTypes = {
  item: PropTypes.object,
};
export default CartItem;
