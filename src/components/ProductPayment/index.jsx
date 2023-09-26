import React, { useEffect, useState } from "react";
import style from "./style.module.css";
import "./custome.css";
import { Alert, Button, Col, Form, Input, Row, Select, Typography } from "antd";
import { DatePicker, Space } from "antd";
import moment from "moment";
import { LoadingOutlined } from "@ant-design/icons";
import { useForm } from "antd/es/form/Form";
import { Option } from "antd/es/mentions";
import { useNavigate } from "react-router-dom";
import LoadingAnt from "../LoadingAnt/LoadingAnt";

const ProductPayment = () => {
  const navigate = useNavigate();
  const listOrder = [
    {
      id: 1,
      name: "laptop Asus",
      price: 1000,
      number: "1",
      totalPrice: 2000,
    },
    {
      id: 2,

      name: "laptop Lenovo",
      price: 2000,
      number: "2",
      totalPrice: 4000,
    },
  ];

  const [form] = Form.useForm();

  const [dateSelect, setDateSelect] = useState(null);
  const [dateShip, setDateShip] = useState(null);
  const [payment, setPayment] = useState(null);
  const [loading, setLoading] = useState(true);
  const config = {
    rules: [
      {
        type: "object",
        required: true,
        message: "Please select time!",
      },
    ],
  };

  let allPriceItem = listOrder.map((items) => items.totalPrice);

  const totalPriceOder = allPriceItem.reduce(
    (accumulator, currentValue) => accumulator + currentValue
  );

  const currentDay = moment();
  const PickDate = (date, dateString) => {
    setDateSelect(dateString);
    const newDateShip = moment(dateString, "DD-MM-YYYY").add(1, "days");
    setDateShip(newDateShip.format("DD-MM-YYYY"));
  };

  useEffect(() => {
    setDateShip(dateShip);
  }, [dateShip]);

  const submitFormOrder = () => {
    const note = form.getFieldValue("note");
    const datePicker = form.getFieldValue("selectDate");
    const formattedDate = moment(datePicker).format("DD-MM-YYYY");
    const expectedDate = dateShip;
    const optionPay = form.getFieldValue("optionPay");
    const totalOrder = totalPriceOder;

    const data = {
      listOrder: listOrder,
      note: note,
      datePicker: formattedDate,
      expectedDate: expectedDate,
      optionPay: optionPay,
      totalOrder: totalOrder,
    };

    console.log(data);
  };

  return (
    <div className={style.container}>
      {loading ? (
        <LoadingAnt />
      ) : (
        <div className="formOrder">
          <Form
            form={form}
            className="formOrder"
            size="middle"
            labelCol={{ span: 12 }}
            onFinish={submitFormOrder}
          >
            <Row gutter={[20, 20]}>
              <Col xxl={16} xl={18} lg={24} md={24} sm={24} xs={24}>
                <div className={style.content_ProductPay}>
                  <Row justify="center">
                    <Col span={24} className={style.payment_title}>
                      <Row justify="center">
                        <Col xxl={6} xl={6} lg={8} md={8} sm={4} xs={6}>
                          <div className={style.content_ProductHeader}>
                            <p>Sản phẩm</p>
                          </div>
                        </Col>
                        <Col xxl={4} xl={4} lg={4} md={4} sm={4} xs={6}>
                          <div className={style.content_ProductHeader}>
                            <p>Đơn giá</p>
                          </div>
                        </Col>
                        <Col xxl={4} xl={4} lg={4} md={4} sm={4} xs={6}>
                          <div className={style.content_ProductHeader}>
                            <p>Số lượng</p>
                          </div>
                        </Col>
                        <Col xxl={4} xl={4} lg={4} md={4} sm={4} xs={6}>
                          <div className={style.content_ProductHeader}>
                            <p>Thành tiền</p>
                          </div>
                        </Col>
                      </Row>
                    </Col>

                    <Col span={24} className={style.payment_listProduct}>
                      {listOrder.map((item) => (
                        <Row key={item.id} justify="center">
                          <Col xxl={6} xl={6} lg={8} md={8} sm={4} xs={6}>
                            <div className={style.content_Product}>
                              <p>{item.name}</p>
                            </div>
                          </Col>
                          <Col xxl={4} xl={4} lg={4} md={4} sm={4} xs={6}>
                            <div className={style.content_Product}>
                              <p>{item.price}</p>
                            </div>
                          </Col>
                          <Col xxl={4} xl={4} lg={4} md={4} sm={4} xs={6}>
                            <div className={style.content_Product}>
                              <p>{item.number}</p>
                            </div>
                          </Col>
                          <Col xxl={4} xl={4} lg={4} md={4} sm={4} xs={6}>
                            <div className={style.content_Product}>
                              <p>{item.totalPrice}</p>
                            </div>
                          </Col>
                        </Row>
                      ))}
                    </Col>
                    <Col span={24}>
                      <Row gutter={[20, 20]} className={style.note_Shop}>
                        <Col xxl={12} xl={12} lg={12} md={12} sm={24} xs={24}>
                          <Form.Item name="note" label="Lưu ý cho shop">
                            <Input.TextArea showCount maxLength={100} />
                          </Form.Item>
                        </Col>
                        <Col xxl={12} xl={12} lg={12} md={12} sm={24} xs={24}>
                          <Row gutter={[10, 10]}>
                            <Col span={24}>
                              <Form.Item
                                name="selectDate"
                                label="Chọn thời gian vận chuyển : "
                                {...config}
                              >
                                <DatePicker
                                  onChange={PickDate}
                                  format="DD-MM-YYYY"
                                  locale
                                  showToday={true}
                                  // defaultValue={moment()}
                                />
                              </Form.Item>
                              <Form.Item
                                name="dateShip"
                                label="Ngày dự kiến "
                                initialValue={dateShip}
                              >
                                <p>{dateShip}</p>
                              </Form.Item>
                              <Form.Item
                                name="optionPay"
                                label="Chọn phương thức thanh toán :"
                                rules={[
                                  {
                                    required: true,
                                    message:
                                      "Vui lòng chọn phương thức thanh toán!",
                                  },
                                ]}
                              >
                                <Select placeholder="Chọn phương thức !">
                                  <Option value="cash">Tiền Mặt</Option>
                                  <Option value="bank">Chuyển Khoản</Option>
                                </Select>
                              </Form.Item>
                            </Col>
                          </Row>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </div>
              </Col>
              <Col xxl={8} xl={6} lg={24} md={24} sm={24} xs={24}>
                <div className={style.Total}>
                  <Row justify="center" gutter={[20, 20]}>
                    <Form.Item
                      name="total"
                      label="Tổng Tiền :"
                      labelCol={20}
                      className={style.title_Total}
                    >
                      <p>{totalPriceOder}</p>
                    </Form.Item>
                  </Row>
                  <Row justify="center" gutter={[20, 20]}>
                    <Form.Item>
                      <Button
                        type="primary"
                        htmlType="submit"
                        onClick={() => navigate(`/success`)}
                      >
                        Thanh Toán
                      </Button>
                    </Form.Item>
                  </Row>
                </div>
              </Col>
            </Row>
          </Form>
        </div>
      )}
    </div>
  );
};

export default ProductPayment;
