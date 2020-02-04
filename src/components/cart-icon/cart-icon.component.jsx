import React from 'react';
import PropTypes from 'prop-types';
import {toggleCartHidden} from '../../redux/cart/cart.actions';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectCartItemsCount} from '../../redux/cart/cart.selectors';
import {ItemCount, CartIconContainer, ShoppingIconContainer} from './cart-icon.styles';

const CartIcon = ({toggleCartHidden, itemCount}) => (
  <CartIconContainer onClick={toggleCartHidden}>
    <ShoppingIconContainer/>
    <ItemCount>{itemCount ? itemCount : 0}</ItemCount>
  </CartIconContainer>
);

// PropTypes Velidation
CartIcon.propTypes = {
  toggleCartHidden: PropTypes.func,
  itemCount: PropTypes.number,
};
const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount,
});
export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
