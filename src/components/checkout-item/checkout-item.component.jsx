import React from 'react';
import './checkout-item.style.scss';
import { connect } from 'react-redux';
import { removeItemFromCart, removeItem, addItem } from '../../redux/cart/cart.actions';
const CheckoutItem = ({ cartItem, clearItem, removeExistingItem, addQuantityToExistingItem }) => (
  <div className="checkout-item">
    <div className="image-container">
      <img src={cartItem.imageUrl} alt="item" />
    </div>
    <span className="name">{cartItem.name}</span>
    <span className="quantity">
      <div className="arrow" onClick={() => removeExistingItem(cartItem)}>
        &#10094;
      </div>
      <span className="value">{cartItem.quantity}</span>
      <div className="arrow" onClick={() => addQuantityToExistingItem(cartItem)}>
        &#10095;
      </div>
    </span>
    <span className="price">{cartItem.price}</span>
    <div className="remove-button" onClick={() => clearItem(cartItem)}>
      &#10005;
    </div>
  </div>
);
const mapDispatchToProps = dispatch => ({
  clearItem: item => dispatch(removeItemFromCart(item)),
  removeExistingItem: item => dispatch(removeItem(item)),
  addQuantityToExistingItem: item => dispatch(addItem(item))
});
export default connect(null, mapDispatchToProps)(CheckoutItem);
