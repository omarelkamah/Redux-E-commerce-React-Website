import { configureStore } from "@reduxjs/toolkit";
import cartItem from "./reducers/cartItem";
import wishListItem from "./reducers/wishListItem";

const store = configureStore({
  reducer: {
    cart: cartItem,
    wish: wishListItem,
  },
});

export default store;
