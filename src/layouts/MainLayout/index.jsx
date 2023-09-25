import React from "react";
import { Outlet } from "react-router-dom";
import Narbar from "./narbar";
import { Col } from "antd";
import style from "./style.module.css";
import Footer from "./footer";

const Mainlayout = () => {
  return (
    <>
      <Narbar />
      <div className={style.container_mainLayout}>
        <Col xxl={16} xl={20} lg={24} md={24}>
          <Outlet />
        </Col>
      </div>
      <Footer />
    </>
  );
};

export default Mainlayout;
