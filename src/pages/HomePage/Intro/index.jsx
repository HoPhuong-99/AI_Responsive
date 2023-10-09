import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/swiper-bundle.css";

import { Pagination, Navigation } from "swiper/modules";
import dataBaner from "../../../database/laptop";
import style from "./style.module.css";
import { APIService } from "../../../services/apiService";
import { Col, Menu, Row } from "antd";
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons";

function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}

const IntroHome = () => {
  const [items, setItems] = useState([]);
  const getDataCategory = async () => {
    try {
      const data = await APIService.ListCategory();
      const cateItems = (data?.data).map((e) => getItem(e.categoryName));
      setItems(cateItems);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getDataCategory();
  }, []);

  const onClick = (e) => {
    console.log("click", e);
  };

  return (
    <div className={style.wrap_intro_home}>
      <Menu
        onClick={onClick}
        style={{
          width: 256,
        }}
        mode="vertical"
        items={items}
      />
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        // navigation={true}
        modules={[Pagination, Navigation]}
        className={style.containerBanner}
      >
        {dataBaner?.map((item) => (
          <SwiperSlide className={style.containerBanner}>
            <img src={item.img} alt="imgBanner" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default IntroHome;
