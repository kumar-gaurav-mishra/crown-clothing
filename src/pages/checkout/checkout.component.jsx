import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {createStructuredSelector} from 'reselect';
import {selectCartItems, selectCartTotal} from '../../redux/cart/cart.selectors';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import {CheckoutPageContainer, CheckoutHeader, HeaderBlock, Total, TestWarning} from './checkout.styles';
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component';
const CheckoutPage = ({cartItems, total}) => (
  <CheckoutPageContainer>
    <CheckoutHeader>
      <HeaderBlock>
        <span>Product</span>
      </HeaderBlock>
      <HeaderBlock>
        <span>Description</span>
      </HeaderBlock>
      <HeaderBlock>
        <span>Quantity</span>
      </HeaderBlock>
      <HeaderBlock>
        <span>Price</span>
      </HeaderBlock>
      <HeaderBlock>
        <span>Remove</span>
      </HeaderBlock>
    </CheckoutHeader>
    {cartItems.map((cartItem) => (
      <CheckoutItem key={cartItem.id} cartItem={cartItem} />
    ))}
    <Total>
      <span>TOTAL: $ {total}</span>
    </Total>
    <TestWarning>
      *Please use the following thest credit card for payments*
      <br/>
      4242 4242 4242 4242 - EXP: 01/20 - CCV: 123
    </TestWarning>
    <StripeCheckoutButton price={total}/>
  </CheckoutPageContainer>
);
// PropTypes velidation
CheckoutPage.propTypes = {
  cartItems: PropTypes.array,
  total: PropTypes.number,
};
const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
});
export default connect(mapStateToProps)(CheckoutPage);
