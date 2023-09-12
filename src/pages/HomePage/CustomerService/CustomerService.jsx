import React, { useEffect, useState } from "react";

import style from "./style.module.css";
import installwin from "../../../assests/service/caiwin.jpg";
import howtouse from "../../../assests/service/howtouse.jpg";
import cleanpc from "../../../assests/service/cleanpc.jpeg";
import updatepc from "../../../assests/service/updatepc.jpg";
import { APIService } from "../../../services/apiService";

const CustomerService = () => {
  const [listService, setListService] = useState([]);

  const getDataService = async () => {
    try {
      const result = await APIService.ListService();
      setListService(result?.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getDataService();
  }, []);

  return (
    <div className={style.wrap_service}>
      <div className={style.wrap_title_service}>
        <span className={style.line_title}></span>
        <h2 className={style.title_service}>Dịch Vụ</h2>
        <span className={style.line_title}></span>
      </div>
      <div className={style.content_service}>
        {listService?.map((e, key) => (
          <div className={style.item_sevice} key={key}>
            <img src={updatepc} alt="" className={style.img_service} />
            <h3 className={style.title_content_service}>{e?.serviceName}</h3>
            <span>{e?.price}đ</span>
            <span className={style.time_service}>14/08/2023</span>
            <span className={style.line}></span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomerService;
