import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: 0,
    listCart: [],
  },
  reducers: {
    setItemcart: (state, action) => {
      state.cart += 1;
    },

    itemListCart: (state, action) => {
      state.listCart = action.payload;
    },
  },
});

export const { setItemcart, itemListCart } = cartSlice.actions;
export default cartSlice.reducer;
