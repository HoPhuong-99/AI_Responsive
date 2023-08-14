import React from "react";

import style from "./style.module.css";
import installwin from "../../../assests/service/caiwin.jpg";
import howtouse from "../../../assests/service/howtouse.jpg";
import cleanpc from "../../../assests/service/cleanpc.jpeg";
import updatepc from "../../../assests/service/updatepc.jpg";

const CustomerService = () => {
  return (
    <div className={style.wrap_service}>
      <div className={style.wrap_title_service}>
        <span className={style.line_title}></span>
        <h2 className={style.title_service}>HƯỚNG DẪN SỬ DỤNG</h2>
        <span className={style.line_title}></span>
      </div>
      <div className={style.content_service}>
        <div className={style.item_sevice}>
          <img src={installwin} alt="" className={style.img_service} />
          <h3 className={style.title_content_service}>
            Hỗ trợ cài Win chính hãng, cài các phần mềm full acctive
          </h3>
          <span className={style.time_service}>14/08/2023</span>
          <span className={style.line}></span>
        </div>
        <div className={style.item_sevice}>
          <img src={howtouse} alt="" className={style.img_service} />
          <h3 className={style.title_content_service}>
            Hỗ trợ hướng dẫn sử dụng PC Laptop cơ bản tới nâng cao
          </h3>
          <span className={style.time_service}>14/08/2023</span>
          <span className={style.line}></span>
        </div>
        <div className={style.item_sevice}>
          <img src={cleanpc} alt="" className={style.img_service} />
          <h3 className={style.title_content_service}>
            Vệ sinh PC Laptop Bàn phím chuột tản nhiệt, Dán skin máy tính
          </h3>
          <span className={style.time_service}>14/08/2023</span>
          <span className={style.line}></span>
        </div>
        <div className={style.item_sevice}>
          <img src={updatepc} alt="" className={style.img_service} />
          <h3 className={style.title_content_service}>
            Hỗ trợ sửa máy tận nhà, Ultraview hỗ trợ các lỗi PC Laptop, Chuyển
            PC từ case cũ qua case mới
          </h3>
          <span className={style.time_service}>14/08/2023</span>
          <span className={style.line}></span>
        </div>
      </div>
    </div>
  );
};

export default CustomerService;
