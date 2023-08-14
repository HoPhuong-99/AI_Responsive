import React, { useEffect, useState } from "react";
import { APIService } from "../../services/apiService";

import Produce from "./Produce";
import CustomerService from "./CustomerService/CustomerService";

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
    </div>
  );
};

export default HomePage;
