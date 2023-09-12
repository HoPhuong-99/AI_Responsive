import React from "react";
import ProductPayment from "../../components/ProductPayment";
import InforShipment from "../../components/InforShipment";
import style from "./style.module.css";

const PaymentPage = () => {
  return (
    <>
      <div className={style.container}>
        {/* <h1> Thanh toán</h1> */}
        <InforShipment />
        <ProductPayment />
      </div>
    </>
  );
};

export default PaymentPage;
