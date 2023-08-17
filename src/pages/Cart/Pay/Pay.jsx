import React from "react";
import { Radio, Button } from "antd";

import style from "./style.module.css";

const Pay = () => {
  return (
    <div className={style.wrap_pay}>
      <h1 className={style.title}>Thông tin đặt hàng</h1>
      <div className={style.pay_items}>
        <span className={style.pay_items_left}>Khách hàng:</span>
        <span className={style.pay_items_right}>Khanh Duy</span>
      </div>
      <div className={style.pay_items}>
        <span className={style.pay_items_left}>Số điện thoại</span>
        <span className={style.pay_items_right}>0944299933</span>
      </div>
      <div className={style.pay_items}>
        <span className={style.pay_items_left}>Địa chỉ nhận hàng</span>
        <span className={style.pay_items_right}>My home</span>
      </div>
      <div className={style.pay_items}>
        <span className={style.pay_items_left}>Tạm tính</span>
        <span className={style.pay_items_right_active}>9.990.000₫</span>
      </div>
      <div className={style.pay_items}>
        <span className={style.pay_items_left}>Phí vận chuyển</span>
        <span className={style.pay_items_right_active}>Free</span>
      </div>
      <div className={style.pay_items}>
        <span className={style.pay_items_left}>Tổng tiền</span>
        <span className={style.pay_items_right_active}>9.990.000₫</span>
      </div>
      <div className={style.pay_ship}>
        <h1 className={style.title_ship}>Chọn hình thức thanh toán</h1>
        <Radio className={style.ship_cod}>Thanh toán khi giao hàng (COD)</Radio>
      </div>
      <div className={style.total}>
        <span className={style.sub_total}>Tổng tiền:</span>
        <span className={style.sub_price}>9.990.000₫</span>
      </div>
      <Button className={style.btn_oder} type="primary" danger>
        ĐẶT HÀNG NGAY
      </Button>
    </div>
  );
};

export default Pay;
