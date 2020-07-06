import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = "pk_test_pEnPsi4ATrot8KBseBmTLhPv00On9aWFvq";
  const onToken = (token) => {
    console.log(token);
  };
  return (
    <StripeCheckout
      label="Pay Now"
      name="Silverline Jewelry"
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amout={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
