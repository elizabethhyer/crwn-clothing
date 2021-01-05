import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { toggleCartHidden } from "../../redux/cart/cart.actions";
import { selectCartItemsCount } from "../../redux/cart/cart.selectors";
import * as sc from "./cart-icon.styles";

const CartIcon = ({ toggleCartHiddenWithDispatch, itemCount }) => {
  return (
    <sc.CartIconContainer onClick={toggleCartHiddenWithDispatch}>
      <sc.ShoppingIcon className="shopping-icon" />
      <sc.ItemCountContainer className="item-count">
        {itemCount}
      </sc.ItemCountContainer>
    </sc.CartIconContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  toggleCartHiddenWithDispatch: () => dispatch(toggleCartHidden()),
});

// const mapStateToProps = ({ cart: { cartItems } }) => ({
//   itemCount: cartItems.reduce((acc, cartItem) => acc + cartItem.quantity, 0),
// }); //mapStateToProps is called whenever ANY global state change occurs - this is not good for performance. We don't want this to run every time global state changes.

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount,
}); //passes whole reducer state into the selector, which then gets the cart object, which then goes into selectCartItems, grabbing just the items, then passes the items into selectCartItemsCount, which returns a count. That count is then passed in to THIS component as a prop which can be used.

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
