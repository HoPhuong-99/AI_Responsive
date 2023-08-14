import React, { useEffect, useState } from "react";
import { APIService } from "../../services/apiService";

import Produce from "./Produce";

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
    </div>
  );
};

export default HomePage;