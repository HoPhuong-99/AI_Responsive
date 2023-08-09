import React, { useEffect } from "react";
import { APIService } from "../../services/apiService";

const HomePage = () => {
  async function fetchData() {
    try {
      const data = await APIService.get_ListData();
      console.log(data);
    } catch (error) {}
  }
  useEffect(() => {
    fetchData();
  }, []);

  return <div>xin chao</div>;
};

export default HomePage;
