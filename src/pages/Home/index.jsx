import React, { useEffect, useState } from "react";
import { APIService } from "../../services/apiService";

import CustomerService from "./CustomerService/CustomerService";
import Produce from "./Product";
import Customercare from "./CustomerCare/customercare";

const HomePage = () => {
  const [listData, setListData] = useState();

  async function fetchData() {
    try {
      const data = await APIService.get_ListData();
      console.log(data);
      setListData(data);
    } catch (error) {}
  }
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <Produce />
      <CustomerService />
      <Customercare />
    </div>
  );
};

export default HomePage;
