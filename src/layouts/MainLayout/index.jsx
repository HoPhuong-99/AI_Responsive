import React from "react";
import { Outlet } from "react-router-dom";
import Narbar from "./narbar";

const Mainlayout = () => {
  return (
    <>
      <Narbar />
      <Outlet />
    </>
  );
};

export default Mainlayout;
