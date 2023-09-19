import React, { useState } from "react";
import { Steps, Button } from "antd";

import CartPay from "./CartPay/CartPay";
import style from "./style.module.css";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  return (
    <div className={style.container_pay}>
      <CartPay />
    </div>
  );
};

export default Cart;
