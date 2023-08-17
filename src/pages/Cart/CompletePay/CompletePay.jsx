import React from "react";
import { Button } from "antd";

import style from "./style.module.css";

const CompletePay = () => {
  return (
    <div className={style.completepay}>
      <div className={style.title_completepay}>
        <svg
          width="25"
          height="24"
          viewBox="0 0 25 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18.125 5.8H16.25C16.25 3.7005 14.5719 2 12.5 2C10.4281 2 8.75 3.7005 8.75 5.8H6.875C5.84375 5.8 5 6.655 5 7.7V19.1C5 20.145 5.84375 21 6.875 21H18.125C19.1562 21 20 20.145 20 19.1V7.7C20 6.655 19.1562 5.8 18.125 5.8ZM10.625 9.6C10.625 10.1225 10.2031 10.55 9.6875 10.55C9.17188 10.55 8.75 10.1225 8.75 9.6V7.7H10.625V9.6ZM12.5 3.9C13.5312 3.9 14.375 4.755 14.375 5.8H10.625C10.625 4.755 11.4688 3.9 12.5 3.9ZM16.25 9.6C16.25 10.1225 15.8281 10.55 15.3125 10.55C14.7969 10.55 14.375 10.1225 14.375 9.6V7.7H16.25V9.6Z"
            fill="#1E9800"
          ></path>
          <path
            d="M10.954 19L8.70926 16.8743C8.32395 16.5095 8.32395 15.8959 8.70926 15.5311V15.5311C9.06636 15.1929 9.62564 15.1933 9.98224 15.532L10.954 16.455L15.0175 12.6032C15.3743 12.2649 15.9334 12.2648 16.2904 12.6028V12.6028C16.6759 12.9679 16.6759 13.5817 16.2904 13.9467L10.954 19Z"
            fill="white"
          ></path>
        </svg>
        <span>Đặt hàng thành công</span>
      </div>
      <p className={style.sub_title}>
        Cảm ơn quý khách đã cho GEARVN có cơ hội được phục vụ. Nhân viên GEARVN
        sẽ liên hệ với quý khách trong thời gian sớm nhất.
      </p>
      <div className={style.check_profile}>
        <div className={style.title_check}>
          <span>ĐƠN HÀNG #115068</span>
          <span>Quản lý đơn hàng</span>
        </div>
        <div className={style.wrap_items}>
          <div className={style.item_check}>
            <span className={style.item_check_left}>Khách hàng:</span>
            <span className={style.item_check_right}>Khanh Duy</span>
          </div>
          <div className={style.item_check}>
            <span className={style.item_check_left}>Số điện thoại</span>
            <span className={style.item_check_right}>0944299933</span>
          </div>
          <div className={style.item_check}>
            <span className={style.item_check_left}>Email</span>
            <span className={style.item_check_right}>
              Lyhuynhkhanhduy777@gmail.com
            </span>
          </div>
          <div className={style.item_check}>
            <span className={style.item_check_left}>Địa chỉ nhận hàng</span>
            <span className={style.item_check_right}>My home</span>
          </div>
          <div className={style.item_check}>
            <span className={style.item_check_left}>Total</span>
            <span className={style.item_check_right}>9.990.000₫</span>
          </div>
          <div className={style.item_check}>
            <span className={style.item_check_left}>Hình thức thanh toán</span>
            <span className={style.item_check_right}>
              Thanh toán khi giao hàng (COD)
            </span>
          </div>
          <div className={style.status}>Đơn hàng chưa được thanh toán</div>
        </div>
      </div>
      <div className={style.action_checkout}>
        <Button className={style.btn_chat}>Chat với GEARVN</Button>
        <Button className={style.btn_continue}>Tiếp tục mua hàng</Button>
      </div>
    </div>
  );
};

export default CompletePay;
