import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: 0,
    listCart: [],
  },
  reducers: {
    setItemcart: (state, action) => {
      state.cart += action.payload;
    },

    itemListCart: (state, action) => {
      state.listCart = [...state.listCart, action.payload];
      console.log("duy", state.cart);
    },
  },
});

export const { setItemcart, itemListCart } = cartSlice.actions;
export default cartSlice.reducer;
