import React from 'react';
import PropTypes from 'prop-types';
import {StripButton} from './stripe-button.styles';

const StripeCheckoutButton = ({price}) => {
  const priceForStripe = price * 100;
  const publicKey = 'pk_test_ebu7SzTDX4b89bRWRtrMXTda00JxUasVUa';
  const onToken = (token) => {
    console.log(token);
    alert('Payment Successfull');
  };
  return (
    <StripButton label='Pay Now' name='Crown Clothing Ltd.' billingAddress shippingAddress
      image='https://svgshare.com/i/CUz.svg' description={`Your total is $ ${price}`} amount={priceForStripe}
      panelLabel='Pay Now' token={onToken} stripeKey={publicKey}/>
  );
};
StripeCheckoutButton.propTypes = {
  price: PropTypes.number,
};
export default StripeCheckoutButton;
