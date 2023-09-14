import React, { useEffect, useState } from "react";
import style from "./style.module.css";
import { Alert, Button, Col, Row, Select } from "antd";
import { DatePicker, Space } from "antd";
import moment from "moment";
import { LoadingOutlined } from "@ant-design/icons";

const ProductPayment = () => {
  const [date, setDate] = useState(null);
  const [dateShip, setDateShip] = useState(null);
  const [payment, setPayment] = useState(null);
  const [loading, setLoading] = useState(false);

  const currentDay = moment();
  const PickDate = (date, dateString) => {
    setDate(dateString);
    const newDateShip = moment(dateString, "DD-MM-YYYY").add(1, "days");
    setDateShip(newDateShip.format("DD-MM-YYYY"));
  };

  const onChange = (value) => {
    setPayment(value);
  };

  console.log(payment);

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
              <Row gutter={[20, 20]}>
                <Col span={10}>
                  <div className={style.noteMessage}>
                    <span>Lời nhắn :</span>
                    <input placeholder="Lưu ý cho shop" />
                  </div>
                </Col>
                <Col span={6}>
                  <Row gutter={[10, 10]}>
                    <Col span={12}>
                      <Row gutter={[20, 20]}>
                        <span>Thời gian vận chuyển : </span>
                        <span>Thời gian dự kiến : </span>
                      </Row>
                    </Col>
                    <Col span={12}>
                      <Row gutter={[5, 5]}>
                        <Space direction="vertical">
                          <DatePicker
                            onChange={PickDate}
                            format={"DD-MM-YYYY"}
                            locale
                            showToday={true}
                            defaultValue={moment()}
                          />
                        </Space>
                        <span>{dateShip} </span>
                      </Row>
                    </Col>
                  </Row>
                </Col>

                <Col span={8}>
                  <Row gutter={[20, 20]}>
                    <Col>
                      <span> Chọn phương thức thanh toán : </span>
                    </Col>
                    <Col>
                      <Select
                        showSearch
                        placeholder="Select a person"
                        optionFilterProp="children"
                        onChange={onChange}
                        options={[
                          {
                            value: "cash",
                            label: "Tiền Mặt",
                          },
                          {
                            value: "bank",
                            label: "Chuyển Khoản",
                          },
                        ]}
                      />
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row justify={"end"}>
            <Col span={4}>
              <p>Tổng Tiền</p>
            </Col>
          </Row>
          <Row justify={"center"}>
            <Button>
              Default Button <LoadingOutlined />
            </Button>
          </Row>
        </div>
      </div>
    </>
  );
};

export default ProductPayment;
