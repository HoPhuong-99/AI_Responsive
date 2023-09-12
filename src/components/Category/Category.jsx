import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";

import { APIService } from "../../services/apiService";
import style from "./style.module.css";
import pc from "../../assests/swiper/pc.png";

const Category = () => {
  const [listCategory, setListCategory] = useState([]);

  const getDataCategory = async () => {
    try {
      const data = await APIService.ListCategory();
      setListCategory(data?.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getDataCategory();
  }, []);
  return (
    <div className={style.wrap_category}>
      <h1 className={style.title_category}>Danh mục</h1>
      <Swiper
        slidesPerView={10}
        slidesPerColumn={2}
        spaceBetween={0}
        navigation={true}
        modules={[Pagination, Navigation]}
      >
        {listCategory?.map((e, key) => (
          <SwiperSlide key={key} className={style.containerBanner}>
            <img className={style.img_category} src={pc} alt="" />
            <div className={style.sub_title_category}>{e?.categoryName}</div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Category;
