import React from "react";
import { Col, Image, Row } from "antd";

import dataLt from "../../database/laptop";

import style from "./style.module.css";
import { useNavigate } from "react-router-dom";

const Produce = () => {
  const navigate = useNavigate();

  return (
    <div className={style.wrap_produce}>
      <Col xxl={24}>
        <Row gutter={(20, 20)}>
          {dataLt?.map((item) => (
            <>
              <Col
                span={6}
                className={style.infor_laptop}
                key={item.id}
                onClick={() => navigate(`/productions/${item.id}`)}
              >
                <img src={item?.img} alt="" />
                <h1 className={style.produce_title}>{item?.name}</h1>
                <span className={style.produce_price}>{item?.oldPrice}</span>
                <span className={style.newPrice}>{item?.newPrice}</span>
                <span className={style.sale}>{item?.sale}</span>
              </Col>
            </>
          ))}
        </Row>
      </Col>
    </div>
  );
};

export default Produce;
