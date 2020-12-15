import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
//importing storage this way essentially tells redux that we want to use local storage as our storage
//importing sessionStorage(from a different package link) is not what we want to do here, but is possible
import userReducer from "./user/user.reducer";
import cartReducer from "./cart/cart.reducer";
import directoryReducer from "./directory/directory.reducer";
import shopReducer from "./shop/shop.reducer";

const persistConfig = {
  key: "root", //at what point in our reducer object do we want to start storing everything. We want to start at the beginning - the 'root'
  storage, // the storage object we imported from redux-persist, this is the storage object we want to use.
  whitelist: ["cart"], //firebase is handling user persistance - so here we let redux-persist know that all we want to persist is the cart. If we ever add anything else we want to persist, we just throw it into the array.
};

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  directory: directoryReducer,
  shop: shopReducer,
});

export default persistReducer(persistConfig, rootReducer);
//exporting a modified version of our root reducer with persistConfig on top of it.
