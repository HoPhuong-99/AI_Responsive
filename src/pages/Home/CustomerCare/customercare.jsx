import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import SwiperCore, {
//   Navigation,
//   Pagination,
//   Controller,
//   Thumbs,
//   EffectCoverflow,
// } from "swiper";
// import "swiper/swiper-bundle.css";

import style from "./style.module.css";
import care from "../../../assests/service/care.jpg";

// SwiperCore.use([Navigation, Pagination, Controller, Thumbs, EffectCoverflow]);

const customercare = () => {
  return (
    <div className={style.container_custom_care}>
      {/* <Swiper
        pagination
        effect="coverflow"
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        slidesPerView={1.5}
        centeredSlides={true}
        watchOverflow={true}
        initialSlide={1.5}
      >
        <SwiperSlide>
          <div className="wrap-img-home">
            <h1 className="title-home">NextIT phát triển Website</h1>
            <img className="img-home-photo" src={care} alt="Sweden Photo One" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="wrap-img-home">
            <h1 className="title-home">NextIT phát triển hệ thống </h1>
            <img className="img-home-photo" src={care} alt="Sweden Photo One" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="wrap-img-home">
            <h1 className="title-home">NextIT Phát triển app Mobile</h1>
            <img className="img-home-photo" src={care} alt="Sweden Photo One" />
          </div>
        </SwiperSlide>
      </Swiper> */}
    </div>
  );
};

export default customercare;
