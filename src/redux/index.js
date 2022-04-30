import { configureStore } from "@reduxjs/toolkit";
import cartItem from "./reducers/cartItem";
import productSlice from "./reducers/productSlice";
import wishListItem from "./reducers/wishListItem";

const store = configureStore({
  reducer: {
    cart: cartItem,
    wish: wishListItem,
    products: productSlice,
  },
});

export default store;
