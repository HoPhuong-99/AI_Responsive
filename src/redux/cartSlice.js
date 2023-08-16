import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: 0,
    listCart: [],
  },
  reducers: {
    setItemcart: (state, action) => {
      console.log("state", state.cart, action);
      state.cart += action.payload;
    },
  },
});

export const { setItemcart } = cartSlice.actions;
export default cartSlice.reducer;
