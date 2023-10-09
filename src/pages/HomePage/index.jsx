import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { APIService } from "../../services/apiService";
import CustomerService from "./CustomerService/CustomerService";
import Produce from "../../components/Product";
import Customercare from "./CustomerCare/customercare";
import IntroHome from "./Intro";
import Category from "../../components/Category/Category";
import style from "./style.module.css";

const HomePage = () => {
  const navigate = useNavigate();
  const [listData, setListData] = useState();

  async function fetchData() {
    try {
      const data = await APIService.ListProducts();
      setListData(data);
    } catch (error) {}
  }
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className={style.container}>
      <IntroHome />
      <Category />
      <CustomerService />
    </div>
  );
};

export default HomePage;
