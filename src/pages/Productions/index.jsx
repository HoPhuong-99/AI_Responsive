import React from "react";
import { useParams } from "react-router-dom";
import dataLt from "../../database/laptop";
import style from "./style.module.css";

const Productions = () => {
  const { id } = useParams();
  const idLaptop = parseInt(id);

  let inforLaptop = dataLt.filter((item) => item.id === idLaptop);

  return (
    <>
      {inforLaptop?.map((item) => (
        <>
          <img src={item?.img} alt="" />
          <h1 className={style.produce_title}>{item?.name}</h1>
          <span className={style.produce_price}>{item?.oldPrice}</span>
          <span className={style.newPrice}>{item?.newPrice}</span>
          <span className={style.sale}>{item?.sale}</span>
        </>
      ))}
    </>
  );
};

export default Productions;