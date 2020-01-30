import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import './stripe-button.style.scss';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publicKey = 'pk_test_ebu7SzTDX4b89bRWRtrMXTda00JxUasVUa';
    const onToken = token => {
        console.log(token);
        alert('Payment Successfull')
    }
    return (
        <StripeCheckout label='Pay Now' name='Crown Clothing Ltd.' billingAddress shippingAddress image='https://svgshare.com/i/CUz.svg' description={`Your total is $ ${price}`} amount={priceForStripe} panelLabel='Pay Now' token={onToken} stripeKey={publicKey}/>
    )
}

export default StripeCheckoutButton;
