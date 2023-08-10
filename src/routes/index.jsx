import React from "react";
import { Route, Routes } from "react-router-dom";
import Mainlayout from "../layouts/MainLayout";
import HomePage from "../pages/Home";
import Cart from "../pages/Cart";

const Router = () => (
  <React.Suspense>
    <Routes>
      <Route path="/" element={<Mainlayout />}>
        <Route index element={<HomePage />} />
        <Route path="/cart" element={<Cart />}></Route>
      </Route>
      <Route path="/" element></Route>
    </Routes>
  </React.Suspense>
);
export default Router;
