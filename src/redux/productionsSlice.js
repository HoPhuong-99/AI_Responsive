import { createSlice } from "@reduxjs/toolkit";

export const productionsSlice = createSlice({
  name: "productions",
  initialState: {
    productions: {
      items: [],
    },
  },
  reducers: {
    setItemProductions: (state, action) => {
      state.productions.items = state.payload.items;
    },
  },
});

export const { setItemProductions } = productionsSlice.actions;

export default productionsSlice.reducer;
