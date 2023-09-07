import React from "react";
import style from "./style.module.css";
import InforShipment from "../../components/InforShipment";

const PaymentPage = () => {
  return (
    <>
      <div>
        <h1> Thanh toán</h1>
        <div>
          <InforShipment />
        </div>
      </div>
    </>
  );
};

export default PaymentPage;
