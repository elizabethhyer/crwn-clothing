import React from "react";
import { connect } from "react-redux";
import { toggleCartHidden } from "../../redux/cart/cart.actions";
import { selectCartItemsCount } from "../../redux/cart/cart.selectors";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import "./cart-icon.styles.scss";

const CartIcon = ({ toggleCartHiddenWithDispatch, itemCount }) => {
  return (
    <div className="cart-icon" onClick={toggleCartHiddenWithDispatch}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{itemCount}</span>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  toggleCartHiddenWithDispatch: () => dispatch(toggleCartHidden()),
});

// const mapStateToProps = ({ cart: { cartItems } }) => ({
//   itemCount: cartItems.reduce((acc, cartItem) => acc + cartItem.quantity, 0),
// }); //mapStateToProps is called whenever ANY global state change occurs - this is not good for performance. We don't want this to run every time global state changes.

const mapStateToProps = (state) => ({
  itemCount: selectCartItemsCount(state),
}); //passes whole reducer state into the selector, which then gets the cart object, which then goes into selectCartItems, grabbing just the items, then passes the items into selectCartItemsCount, which returns a count. That count is then passed in to THIS component as a prop which can be used.

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
