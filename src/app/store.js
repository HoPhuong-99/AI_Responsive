import { configureStore } from "@reduxjs/toolkit";

import productionsSlice from "../redux/productionsSlice";
import cartSlice from "../redux/cartSlice";
import searchSlice from "../redux/searchSlice";

export default configureStore({
  reducer: {
    productionsSlice,
    cartSlice,
    searchSlice,
  },
});
