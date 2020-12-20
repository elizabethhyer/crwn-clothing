import React from "react";
import { connect } from "react-redux";

import {
  clearItemFromCart,
  addItem,
  removeItem,
} from "../../redux/cart/cart.actions";

import * as sc from "./checkout-item.styles";

const CheckoutItem = ({ cartItem, clearItem, addItem, removeItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <sc.CheckoutItemContainer>
      <sc.ImageContainer>
        <img src={imageUrl} alt="item" />
      </sc.ImageContainer>
      <sc.TextContainer>{name}</sc.TextContainer>
      <sc.QuantityContainer>
        <div onClick={() => removeItem(cartItem)}>&#10094;</div>
        <span>{quantity}</span>
        <div onClick={() => addItem(cartItem)}>&#10095;</div>
      </sc.QuantityContainer>
      <sc.TextContainer>{price}</sc.TextContainer>
      <sc.RemoveButtonContainer onClick={() => clearItem(cartItem)}>
        &#10005;
      </sc.RemoveButtonContainer>
    </sc.CheckoutItemContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  clearItem: (item) => dispatch(clearItemFromCart(item)),
  addItem: (item) => dispatch(addItem(item)),
  removeItem: (item) => dispatch(removeItem(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);

//we were destructuring properties of cartItem inthe first argument so that we didn't have to use cartItem.name, cartItem.quantity, etc. but by doing that we now ONLY have access to those properties, and not the cartItem itself. To remedy this, we can pass in the entire cartItem object and destructure those properties inside the function itself.

//Now we can have access to both cartItem and our new clearItem function.
