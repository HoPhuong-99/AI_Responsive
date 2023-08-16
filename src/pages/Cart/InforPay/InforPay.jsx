import React from "react";
import { Radio, Input, Select, Checkbox, Button } from "antd";

import style from "./style.module.css";

const InforPay = () => {
  return (
    <div className={style.wrap_infor_pay}>
      <h3 className={style.infor_pay_title}>Thông tin khách mua hàng</h3>
      <div className={style.infor_pay_radio}>
        <Radio.Group>
          <Radio value={1}>Anh</Radio>
          <Radio value={2}>Chi</Radio>
        </Radio.Group>
      </div>
      <div className={style.infor_pay_profile}>
        <Input placeholder="Nhap ho ten" />
        <Input placeholder="Nhap SDT" />
      </div>
      <h3 className={style.infor_pay_title}>Chọn cách nhận hàng</h3>
      <Radio>Giao hàng tận nơi</Radio>
      <div className={style.adress_pay}>
        <Select
          defaultValue="lucy"
          options={[
            {
              value: "jack",
              label: "Jack",
            },
            {
              value: "lucy",
              label: "Lucy",
            },
            {
              value: "Yiminghe",
              label: "yiminghe",
            },
            {
              value: "disabled",
              label: "Disabled",
              disabled: true,
            },
          ]}
        />
        <Select
          defaultValue="lucy"
          options={[
            {
              value: "jack",
              label: "Jack",
            },
            {
              value: "lucy",
              label: "Lucy",
            },
            {
              value: "Yiminghe",
              label: "yiminghe",
            },
            {
              value: "disabled",
              label: "Disabled",
              disabled: true,
            },
          ]}
        />
        <Select
          defaultValue="lucy"
          options={[
            {
              value: "jack",
              label: "Jack",
            },
            {
              value: "lucy",
              label: "Lucy",
            },
            {
              value: "Yiminghe",
              label: "yiminghe",
            },
            {
              value: "disabled",
              label: "Disabled",
              disabled: true,
            },
          ]}
        />
        <Input placeholder="adress" />
      </div>
      <div className={style.note_pay}>
        <Input placeholder="Note" />
      </div>
      <div className={style.bill_pay}>
        <Checkbox>Xuất hoá đơn cho đơn hàng</Checkbox>
      </div>
      <div className={style.transport_fee_pay}>
        <span>Phí vận chuyển:</span>
        <span>Miễn phí</span>
      </div>
      <div className={style.total_money_pay}>
        <span>Tổng tiền:</span>
        <span>9.990.000₫</span>
      </div>
      <Button>ĐẶT HÀNG NGAY</Button>
      <span>Bạn có thể chọn hình thức thanh toán sau khi đặt hàng</span>
    </div>
  );
};

export default InforPay;
