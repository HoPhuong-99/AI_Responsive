import React from "react";
import style from "./style.module.css";

const CartList = (props) => {
  const { cart } = props;

  return (
    <>
      {cart?.map((i) => (
        <div className={style.wrap_cartpay}>
          <div className={style.img_pay}>
            <img className={style.img_item} src={i?.image} alt="" />
            <p> quality : {i.quantily}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default CartList;
