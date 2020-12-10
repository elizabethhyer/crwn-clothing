import { createSelector } from "reselect";

//input selector grabs the WHOLE state and just returns a slice to us
const selectCart = (state) => state.cart;

//takes in an array of input selectors (selectCart) and is now a memoized selector
export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
);

//Now reduces the number of cart items from a smaller, more specific piece of state. This is what is actually used in the cart-icon component.
export const selectCartItemsCount = createSelector(
  [selectCartItems],
  (cartItems) => cartItems.reduce((acc, cartItem) => acc + cartItem.quantity, 0)
);
