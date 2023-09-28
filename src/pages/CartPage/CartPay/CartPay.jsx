import React, { useEffect, useState } from "react";
import { Button, Checkbox, Col, Input, Row } from "antd";
import { useDispatch, useSelector } from "react-redux";
import {
  DeleteOutlined,
  CaretUpOutlined,
  CaretDownOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

import style from "./style.module.css";
import { itemListCart } from "../../../redux/cartSlice";

const Cartpay = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const listDataCart = useSelector((state) => state.cartSlice?.listCart);
  let allPriceItem = listDataCart.map((items) => items.price * items.quantily);
  const [total, setTotal] = useState(null);
  const [selectedItems, setSelectedItems] = useState([]);
  const [selectAll, setSelectAll] = useState(false);
  const [totalNumbItem, setTotalNumbItem] = useState(0);

  console.log(listDataCart);

  const [quantities, setQuantities] = useState(
    listDataCart.map((item) => item.quantily)
  );

  const updateQuantity = (itemId, newQuantity) => {
    const updatedQuantities = quantities.map((preQuantily, index) =>
      listDataCart[index].id === itemId ? newQuantity : preQuantily
    );

    setQuantities(updatedQuantities);
    dispatch(
      itemListCart(
        listDataCart.map((item, index) => ({
          ...item,
          quantily: updatedQuantities[index],
        }))
      )
    );
  };

  const deleteItem = (itemId) => {
    const updateCart = listDataCart.filter((item) => item.id !== itemId);
    dispatch(itemListCart(updateCart));
  };

  const handleCheckbox = (itemId) => {
    if (selectedItems.includes(itemId)) {
      setSelectedItems(selectedItems.filter((id) => id !== itemId));
      setTotalNumbItem(totalNumbItem - 1);
    } else {
      setSelectedItems([...selectedItems, itemId]);
      setTotalNumbItem(totalNumbItem + 1);
    }
  };

  const totalPrice = allPriceItem.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    total
  );

  useEffect(() => {
    if (selectAll) {
      setSelectedItems(listDataCart.map((item) => item.id));
    } else {
      setSelectedItems([]);
    }
  }, [selectAll]);

  useEffect(() => {
    if (
      selectedItems.length > 0 &&
      selectedItems.length === listDataCart.length
    ) {
      setSelectAll(true);
    } else {
      setSelectAll(false);
    }
  }, [selectedItems]);

  return (
    <>
      {listDataCart.length > 0 ? (
        <>
          <Col span={22} className={style.nameTitle_cart}>
            <Row>
              <Col span={12}>
                <div className={style.content_Produt}>
                  <p className={style.checkBox_All}>
                    <Checkbox
                      checked={selectAll}
                      onChange={() => setSelectAll(!selectAll)}
                    ></Checkbox>
                    Sản phẩm
                  </p>
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
          <div className={style.hero_pay}>
            {listDataCart?.map((i, index) => (
              <div className={style.wrap_cartpay} key={i.id}>
                <Col span={22}>
                  <Row>
                    <Col span={12} className={style.product_Name}>
                      <Checkbox
                        onChange={() => handleCheckbox(i.id)}
                        checked={selectedItems.includes(i.id)}
                      />
                      <div className={style.img_pay}>
                        <img className={style.img_item} src={i?.image} alt="" />
                        <div
                          className={style.delete_pay_item}
                          onClick={() => deleteItem(i.id)}
                        >
                          <DeleteOutlined />
                          <span className={style.sub_title_delete}>Delete</span>
                        </div>
                      </div>
                      <p>{i.productName}</p>
                    </Col>
                    <Col span={4}>
                      <div className={style.content_Produt}>
                        <p>{i.price}</p>
                      </div>
                    </Col>
                    <Col span={4}>
                      <div className={style.content_Produt}>
                        <div className={style.btn_qualyti}>
                          {i.quantily <= 1 ? (
                            <Button>-</Button>
                          ) : (
                            <Button
                              onClick={() =>
                                updateQuantity(i.id, quantities[index] - 1)
                              }
                            >
                              -
                            </Button>
                          )}
                          <Input
                            className={style.input_qualyty}
                            value={i.quantily}
                          />
                          <Button
                            onClick={() => updateQuantity(i.id, i.quantily + 1)}
                          >
                            +
                          </Button>
                        </div>
                      </div>
                    </Col>
                    <Col span={4}>
                      <span className={style.price_new}>
                        {i.price * i.quantily}
                      </span>
                    </Col>
                  </Row>
                </Col>
              </div>
            ))}
            <div className={style.order}>
              <div className={style.total}>
                <span className={style.checkBox_All}>
                  <Checkbox
                    checked={selectAll}
                    onChange={() => setSelectAll(!selectAll)}
                  />
                  Chọn tất cả
                </span>
                <span className={style.sub_total}>
                  Tổng thanh toán ( {totalNumbItem} Sản phẩm)
                </span>
                <span className={style.sub_price}>
                  vnd
                  {totalNumbItem > 0 && (
                    <span className={style.sub_price}> {totalPrice}</span>
                  )}
                </span>

                <Button
                  className={style.btn_oder}
                  danger
                  type="primary"
                  onClick={() => navigate(`/payment`)}
                >
                  Order Now
                </Button>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className={style.cart_emty}>
          <span className={style.sub_emty}>Giỏ hàng của bạn đang trống</span>
          <Button
            className={style.btn_emty}
            onClick={() => navigate(`/payment`)}
            // onClick={() => navigate(`/`)}
          >
            Tiếp tục mua hàng
          </Button>
        </div>
      )}
    </>
  );
};

export default Cartpay;
