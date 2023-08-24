import React, { useEffect, useState } from "react";
import { APIService } from "../../services/apiService";

import CustomerService from "./CustomerService/CustomerService";
import Produce from "../../components/Product";
import Customercare from "./CustomerCare/customercare";
import { useNavigate } from "react-router-dom";

import style from "./style.module.css";
import IntroHome from "./Intro";

const HomePage = () => {
  const navigate = useNavigate();
  const [listData, setListData] = useState();

  async function fetchData() {
    try {
      const data = await APIService.get_ListData();
      setListData(data);
    } catch (error) {}
  }
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className={style.container}>
      <IntroHome />
      <div className={style.listItem}>
        <p className={style.titleProduct}>Our Product</p>
        <Produce />
        <p onClick={() => navigate(`/collections`)} className={style.seeAll}>
          Show All
        </p>
      </div>
      <CustomerService />
      {/* <Customercare /> */}
    </div>
  );
};

export default HomePage;
