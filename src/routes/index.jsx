import React from "react";
import { Route, Routes } from "react-router-dom";
import Mainlayout from "../layouts/MainLayout";
import HomePage from "../pages/HomePage";
import Cart from "../pages/CartPage";
import Productions from "../pages/ProductionPage";
import Collections from "../pages/CollectionPage";
import Search from "../pages/SearchPage/Search";

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
