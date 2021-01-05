import React from "react";
import * as sc from "./cart-item.styles";

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => {
  return (
    <sc.CartItemContainer>
      <sc.CartItemImage src={imageUrl} alt="item" />
      <sc.ItemDetailsContainer>
        <span className="name">{name}</span>
        <span className="price">
          {quantity} x ${price}
        </span>
      </sc.ItemDetailsContainer>
    </sc.CartItemContainer>
  );
};

export default CartItem;
