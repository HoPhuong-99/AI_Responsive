import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/swiper-bundle.css";

import { Pagination, Navigation } from "swiper/modules";
import dataBaner from "../../../database/laptop";
import style from "./style.module.css";

const IntroHome = () => {
  return (
    <div className={style.wrap_intro_home}>
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
    </div>
  );
};

export default IntroHome;
