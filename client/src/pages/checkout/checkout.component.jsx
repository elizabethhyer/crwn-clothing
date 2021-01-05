import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import StripeCheckoutButton from "../../components/stripe-button/stripe-button.component";
import {
  selectCartItems,
  selectCartTotal,
} from "../../redux/cart/cart.selectors";
import * as sc from "./checkout.styles";

const CheckoutPage = ({ cartItems, total }) => {
  return (
    <sc.CheckoutPageContainer>
      <sc.CheckoutHeaderContainer>
        <sc.HeaderBlockContainer>
          <span>Product</span>
        </sc.HeaderBlockContainer>
        <sc.HeaderBlockContainer>
          <span>Description</span>
        </sc.HeaderBlockContainer>
        <sc.HeaderBlockContainer>
          <span>Quantity</span>
        </sc.HeaderBlockContainer>
        <sc.HeaderBlockContainer>
          <span>Price</span>
        </sc.HeaderBlockContainer>
        <sc.HeaderBlockContainer>
          <span>Remove</span>
        </sc.HeaderBlockContainer>
      </sc.CheckoutHeaderContainer>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <sc.TotalContainer>
        <span>TOTAL: ${total}</span>
      </sc.TotalContainer>
      <sc.WarningContainer>
        *Please use the following test credit card for payments*
        <br />
        4242 4242 4242 4242 - Exp: 01/23 - CVV: 123
      </sc.WarningContainer>
      <StripeCheckoutButton price={total} />
    </sc.CheckoutPageContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
});

export default connect(mapStateToProps)(CheckoutPage);
