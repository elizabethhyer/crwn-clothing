import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { withRouter } from "react-router-dom";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import { toggleCartHidden } from "../../redux/cart/cart.actions";
import CustomButton from "../custom-button/custom-button.component";
import CartItem from "../cart-item/cart-item.component";
import "./cart-dropdown.styles.scss";

const CartDropdown = ({ cartItems, history, dispatch }) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <span className="empty-message">Your cart is empty</span>
        )}
      </div>
      <CustomButton
        onClick={() => {
          history.push("/checkout");
          dispatch(toggleCartHidden());
        }}
      >
        GO TO CHECKOUT
      </CustomButton>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
}); //Now, since this uses the memoized selector, the cartDropdown doesn't re-render every time there is a change in global state.

export default withRouter(connect(mapStateToProps)(CartDropdown)); //All HOC return components and also take components as arguments. So it takes component we got from connect call in as an argument.
//The order we pass them in MATTERS. withRouter will be what passes in match, history and location objects into component that is being wrapped.
//We want the component coming out of connect to receive those props.

//If we don't supply a second argument to connect, it automatically sends dispatch into our component as a prop, because if we need to only use dispatch for one action, it would be too verbose to write more mapDispatchToProps functions.

//What is type coersion in JavaScript??(the thing that allows us to just pass in the cartItem.length condition above, instead of explicitly saying cartItem.length > 0)
//type coersion == "1" == 1 and != "1" === 1  | type coersion tries to COERCE the values on either side of the == to be equal
//Six types of things considered to be 'falsy values', so if we put them in a conditional they will return false
//0, false, undefined, null, NaN, and ''
//This is why, when we set default values in state, we tend to set them to the falsy value of what they will be. '' for an empty string, null for an object, 0 for an integer. We want to conditionally render the item itself OR an empty state.
