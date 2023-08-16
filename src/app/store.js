import { configureStore } from "@reduxjs/toolkit";

import productionsSlice from "../redux/productionsSlice";
import cartSlice from "../redux/cartSlice";

export default configureStore({
  reducer: {
    productionsSlice,
    cartSlice,
  },
});
