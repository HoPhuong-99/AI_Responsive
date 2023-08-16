import { configureStore } from "@reduxjs/toolkit";

import productionsSlice from "../redux/productionsSlice";

export default configureStore({
  reducer: {
    productionsSlice,
  },
});
