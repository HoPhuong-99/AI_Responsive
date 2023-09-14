import React, { useState } from "react";
import { Steps, Button } from "antd";

import CartPay from "./CartPay/CartPay";
import CompletePay from "./CompletePay/CompletePay";
import InforPay from "./InforPay/InforPay";
import Pay from "./Pay/Pay";
import style from "./style.module.css";
import { useNavigate } from "react-router-dom";

const steps = [
  {
    title: "Giỏ hàng",
  },
  {
    title: "Thông tin đặt hàng",
  },
  {
    title: "Thanh toán",
  },
  {
    title: "Hoàn tất",
  },
];
const Cart = () => {
  const wrapSteps = [<CartPay />, <InforPay />, <Pay />, <CompletePay />];
  // const wrapSteps = [<CartPay />];
  const [current, setCurrent] = useState(0);
  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  const navigate = useNavigate();
  return (
    <div className={style.container_pay}>
      {/* <div className={style.wrap_btn}>
        {current < steps.length - 1 && (
          <Button type="primary" onClick={() => next()}>
            Next
          </Button>
        )}
        {current === steps.length - 1 && <Button type="primary">Done</Button>}
        {current > 0 && (
          <Button
            style={{
              margin: "0 8px",
            }}
            onClick={() => prev()}
          >
            Previous
          </Button>
        )}
      </div>
      <div className={style.wrap_pay}>
        <Steps current={current} items={steps} />
        <div className="wrap-children-pay">{wrapSteps[current]}</div>
      </div>
      <button onClick={() => navigate("/payment")}>Confirm</button> */}
      <CartPay />
    </div>
  );
};

export default Cart;
