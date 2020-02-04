import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import CustomButton from '../custom-button/custom-button.component';
import {selectCartItems} from '../../redux/cart/cart.selectors';
import {createStructuredSelector} from 'reselect';
import {withRouter} from 'react-router-dom';
import CartItem from '../cart-item/cart-item.component';
import {toggleCartHidden} from '../../redux/cart/cart.actions.js';
import {CartDropdownContainer, CartItemsContainer, EmptyCart} from './cart-dropdown.styles';

const CartDropdown = ({cartItems, history, dispatch}) => (
  <CartDropdownContainer>
    <CartItemsContainer>
      {cartItems.length ? cartItems.map((cartItem) => <CartItem key={cartItem.id} item={cartItem} />) : <EmptyCart>Your Cart is empty.</EmptyCart>}
    </CartItemsContainer>
    <CustomButton
      onClick={() => {
        history.push('/checkout');
        dispatch(toggleCartHidden());
      }}>
      GO TO CHECKOUT
    </CustomButton>
  </CartDropdownContainer>
);

// PropTypes Velidation
CartDropdown.propTypes = {
  cartItems: PropTypes.array,
  history: PropTypes.object,
  dispatch: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});
export default withRouter(connect(mapStateToProps)(CartDropdown));
