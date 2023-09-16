import React, { useEffect, useState } from "react";
import style from "./style.module.css";
import "./custome.css";
import { Alert, Button, Col, Form, Input, Row, Select, Typography } from "antd";
import { DatePicker, Space } from "antd";
import moment from "moment";
import { LoadingOutlined } from "@ant-design/icons";
import { useForm } from "antd/es/form/Form";
import { Option } from "antd/es/mentions";

const ProductPayment = () => {
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
  const [loading, setLoading] = useState(false);
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
  };

  return (
    <>
      <div className={style.container}>
        <div className="formOrder">
          <Col xl={24} lg={22} md={20}>
            <Row justify={"center"}>
              <Form
                form={form}
                className="formOrder"
                size="middle"
                labelCol={{ span: 12 }}
                onFinish={submitFormOrder}
              >
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
                    {listOrder.map((item) => (
                      <Row key={item.id}>
                        <Col span={12}>
                          <div className={style.content_Produt}>
                            <p>{item.name}</p>
                          </div>
                        </Col>
                        <Col span={4}>
                          <div className={style.content_Produt}>
                            <p>{item.price}</p>
                          </div>
                        </Col>
                        <Col span={4}>
                          <div className={style.content_Produt}>
                            <p>{item.number}</p>
                          </div>
                        </Col>
                        <Col span={4}>
                          <div className={style.content_Produt}>
                            <p>{item.totalPrice}</p>
                          </div>
                        </Col>
                      </Row>
                    ))}
                  </Col>
                  <Col span={24}>
                    <Row gutter={[20, 20]}>
                      <Col span={8}>
                        <Form.Item name="note" label="Lưu ý cho shop">
                          <Input.TextArea showCount maxLength={100} />
                        </Form.Item>
                      </Col>
                      <Col span={10}>
                        <Row gutter={[10, 10]}>
                          <Col span={24}>
                            <Form.Item
                              name="selectDate"
                              label="Chọn thời gian vận chuyển : "
                              {...config}
                            >
                              <DatePicker
                                onChange={PickDate}
                                format={"DD-MM-YYYY"}
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
                                  message: "Please select gender!",
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

                      <Col span={4}>
                        <Row justify={"center"} gutter={[20, 20]}>
                          <Form.Item
                            name="total"
                            label="Tổng Tiền :"
                            labelCol={20}
                          >
                            <p>{totalPriceOder}</p>
                          </Form.Item>
                        </Row>
                      </Col>
                    </Row>
                  </Col>
                </Row>

                <Row justify={"center"}>
                  <Form.Item>
                    <Button type="primary" htmlType="submit">
                      Register
                    </Button>
                  </Form.Item>
                </Row>
              </Form>
            </Row>
          </Col>
        </div>
      </div>
    </>
  );
};

export default ProductPayment;
