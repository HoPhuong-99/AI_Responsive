import React, { useEffect, useState } from "react";
import style from "./style.module.css";
import { Alert, Col, Row } from "antd";
import { DatePicker, Space } from "antd";
import moment from "moment";

const ProductPayment = () => {
  const [date, setDate] = useState(null);
  const [dateShip, setDateShip] = useState(null);
  const currentDay = moment();
  const PickDate = (date, dateString) => {
    setDate(dateString);
    const newDateShip = moment(dateString, "DD-MM-YYYY").add(1, "days");
    setDateShip(newDateShip.format("DD-MM-YYYY"));
  };

  console.log(date);

  return (
    <>
      <div className={style.container}>
        <div className={style.infor_Product}>
          <Row gutter={[20, 20]}>
            <Col span={24}>
              <Row>
                <Col span={12}>
                  <div className={style.content_Produt}>
                    <p>Sản phẩm</p>
                  </div>
                </Col>
                <Col span={4}>
                  <div className={style.content_Produt}>
                    <p>Đơn giá</p>
                  </div>
                </Col>
                <Col span={4}>
                  <div className={style.content_Produt}>
                    <p>Số lượng</p>
                  </div>
                </Col>
                <Col span={4}>
                  <div className={style.content_Produt}>
                    <p>Thành tiền</p>
                  </div>
                </Col>
              </Row>
            </Col>
            <Col span={24}>
              <Row>
                <Col span={12}>
                  <div className={style.content_Produt}>
                    <p>Laptop Gaming</p>
                  </div>
                </Col>
                <Col span={4}>
                  <div className={style.content_Produt}>
                    <p>₫ 149.310 </p>
                  </div>
                </Col>
                <Col span={4}>
                  <div className={style.content_Produt}>
                    <p>1</p>
                  </div>
                </Col>
                <Col span={4}>
                  <div className={style.content_Produt}>
                    <p>₫149.310</p>
                  </div>
                </Col>
              </Row>
            </Col>
            <Col span={24}>
              <Row>
                <Col span={10}>
                  <div className={style.noteMessage}>
                    <span>Lời nhắn :</span>
                    <input placeholder="Lưu ý cho shop" />
                  </div>
                </Col>
                <Col span={10}>
                  <Row>
                    <div className={style.timeShip}>
                      <span>Thời gian vận chuyển : </span>
                      <Space direction="vertical">
                        <DatePicker
                          onChange={PickDate}
                          format={"DD-MM-YYYY"}
                          // defaultValue={currentDay}
                        />
                      </Space>
                    </div>
                  </Row>
                  <Row>
                    <div className={style.timeShip}>
                      <span>Thời gian dự kiến : </span>
                      <span>{dateShip} </span>
                    </div>
                  </Row>
                </Col>
                <Col span={4}>
                  <div className={style.content_Produt}>
                    <p>30000</p>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
};

export default ProductPayment;
