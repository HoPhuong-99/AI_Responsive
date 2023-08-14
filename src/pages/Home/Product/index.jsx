import React from "react";
import { Col, Image, Row } from "antd";
import style from "./style.module.css";

const Produce = () => {
  const datafake = [
    {
      img: "sss",
      name: "Màn hình AOC 27G2SP 27 IPS 165Hz Gsync compatible chuyên gaming",
      oldPrice: "5.190.000₫",
      newPrice: "4.690.000₫",
      sale: "-34%",
    },
    {
      img: "sss1",
      name: "Màn hình AOC 27G2SP 27 IPS 165Hz Gsync compatible chuyên gaming",
      oldPrice: "5.190.000₫",
      newPrice: "4.690.000₫",
      sale: "-34%",
    },
  ];
  return (
    <div className={style.wrap_produce}>
      {/* {datafake?.map((e) => (
        <div className={style.items_produce}>
          <div className={style.produce_img}>
            <Image src={e?.img} alt="" />
          </div>
          <div className={style.produce_content}>
            <h1 className={style.produce_title}>{e?.name}</h1>
            <span className={style.produce_price}>{e?.oldPrice}</span>
            <div className={style.wrap_price_new}>
              <span className={style.newPrice}>{e?.newPrice}</span>
              <span className={style.sale}>{e?.sale}</span>
            </div>
          </div>
        </div>
      ))} */}
    </div>
  );
};

export default Produce;
