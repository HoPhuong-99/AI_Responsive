import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper/modules";
import dataBaner from "../../../database/laptop";
import style from "./style.module.css";

const IntroHome = () => {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        // pagination={{
        //   clickable: true,
        // }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className={style.containerBanner}
      >
        {dataBaner?.map((item) => (
          <SwiperSlide className={style.containerBanner}>
            <img src={item.img} alt="imgBanner" />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default IntroHome;
