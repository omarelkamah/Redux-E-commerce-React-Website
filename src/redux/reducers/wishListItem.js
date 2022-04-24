import { createSlice } from "@reduxjs/toolkit";

const initialState = { wishList: [] };

const wishListSlice = createSlice({
  name: "addToCart",
  initialState,
  reducers: {
    addToWishList: (state, action) => {
      const exist = state.wishList.find((x) => x.id === action.payload.id);

      if (exist) {
        state.wishList = state.wishList.map((x) =>
          x.id === action.payload.id ? { ...exist, qty: exist.qty + 1 } : x
        );
      } else {
        state.wishList = [...state.wishList, { ...action.payload, qty: 1 }];
      }

      console.log(state.wishList);
    },
    removeFromWishList: (state, action) => {
      const exist = state.wishList.find((x) => x.id === action.payload.id);

      if (exist.qty === 1) {
        state.wishList = state.wishList.filter(
          (x) => x.id !== action.payload.id
        );
      } else {
        state.wishList = state.wishList.map((x) =>
          x.id === action.payload.id ? { ...exist, qty: exist.qty - 1 } : x
        );
      }
    },
  },
});

export default wishListSlice.reducer;

export const { addToWishList, removeFromWishList } = wishListSlice.actions;
