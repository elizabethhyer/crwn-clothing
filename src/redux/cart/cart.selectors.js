import { createSelector } from "reselect";

//input selector grabs the WHOLE state and just returns a slice to us
const selectCart = (state) => state.cart;

//takes in an array of input selectors (selectCart) and is now a memoized selector
export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
);

export const selectCartHidden = createSelector(
  [selectCart],
  (cart) => cart.hidden
);

//Now reduces the number of cart items from a smaller, more specific piece of state. This is what is actually used in the cart-icon component.
export const selectCartItemsCount = createSelector(
  [selectCartItems],
  (cartItems) => cartItems.reduce((acc, cartItem) => acc + cartItem.quantity, 0)
);

//This is more code, but the benefit in here is that it saves us from running the same logic in all our components for every single state change.
