import React, { useState } from "react";
import { Radio, Input, Select, Checkbox, Button } from "antd";

import style from "./style.module.css";

const InforPay = () => {
  const [checkBill, setCheckBill] = useState(false);
  console.log("chekc", checkBill);

  return (
    <div className={style.wrap_infor_pay}>
      <h3 className={style.infor_pay_title}>Thông tin khách mua hàng</h3>
      <div className={style.infor_pay_font_weight}>
        <Radio.Group>
          <Radio value={1}>Anh</Radio>
          <Radio value={2}>Chi</Radio>
        </Radio.Group>
      </div>
      <div className={style.infor_pay_profile}>
        <Input placeholder="Nhap ho ten" className={style.note_pay} />
        <Input placeholder="Nhap SDT" className={style.note_pay} />
      </div>
      <h3 className={style.infor_pay_title}>Chọn cách nhận hàng</h3>
      <Radio className={style.infor_pay_font_weight}>Giao hàng tận nơi</Radio>
      <div className={style.adress_pay}>
        <Select
          className={style.adress_pay_items}
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
          className={style.adress_pay_items}
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
          className={style.adress_pay_items}
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
        <Input placeholder="adress" className={style.adress_pay_items} />
      </div>
      <Input placeholder="Note" className={style.note_pay} />
      <div className={style.bill_pay}>
        <Checkbox onChange={() => setCheckBill(!checkBill)}>
          Xuất hoá đơn cho đơn hàng
        </Checkbox>
      </div>
      {checkBill && (
        <div className={style.input_bill}>
          <div className={style.input_bill_wrap_items_top}>
            <Input
              className={style.input_bill_items_top}
              placeholder="name company"
            />
            <Input
              className={style.input_bill_items_top}
              placeholder="adress company"
            />
          </div>
          <div className={style.input_bill_wrap_items_bottom}>
            <Input
              className={style.input_bill_items_bottom}
              placeholder="thue"
            />
            <Input
              className={style.input_bill_items_bottom}
              placeholder="Email"
            />
          </div>
        </div>
      )}

      <div className={style.wrap_transport}>
        <span className={style.sub_transport}>Phí vận chuyển:</span>
        <span className={style.fee}>Miễn phí</span>
      </div>
      <div className={style.total}>
        <span className={style.sub_total}>Tổng tiền:</span>
        <span className={style.sub_price}>9.990.000₫</span>
      </div>
      <Button className={style.btn_oder} type="primary" danger>
        ĐẶT HÀNG NGAY
      </Button>
      <span className={style.dec_pay}>
        Bạn có thể chọn hình thức thanh toán sau khi đặt hàng
      </span>
    </div>
  );
};

export default InforPay;
