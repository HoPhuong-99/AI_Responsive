import React, { useEffect, useState } from "react";
import { APIService } from "../../services/apiService";

import CustomerService from "./CustomerService/CustomerService";
import Produce from "../../components/Product";
import Customercare from "./CustomerCare/customercare";

import style from "./style.module.css";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate()
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
    <div>
      <div>
        <div className={style.title_ListProduc}>
          <p>Danh sách sản phẩm</p>
          <p onClick={()=>navigate(`/collections`)} className={style.seeAll}>Xem tất cả </p>
        </div>
        <Produce />
      </div>
      <CustomerService />
      {/* <Customercare /> */}
    </div>
  );
};

export default HomePage;
