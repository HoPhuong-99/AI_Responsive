import React from "react";
import { Route, Routes } from "react-router-dom";
import Mainlayout from "../layouts/MainLayout";
import HomePage from "../pages/Home";
import Cart from "../pages/Cart";
import Productions from "../pages/Productions";
import Collections from "../pages/Collections";
import Search from "../pages/Search/Search";

const Router = () => (
  <React.Suspense>
    <Routes>
      <Route path="/" element={<Mainlayout />}>
        <Route index element={<HomePage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/productions/:id" element={<Productions />} />
        <Route path="/collections" element={<Collections />} />
        <Route path="/search" element={<Search />} />
      </Route>
      <Route path="/" element></Route>
    </Routes>
  </React.Suspense>
);
export default Router;
