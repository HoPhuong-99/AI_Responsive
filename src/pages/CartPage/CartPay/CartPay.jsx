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
  const [cartItem, setCartItem] = useState([]);
  let allPriceItem =
    cartItem.length > 0
      ? cartItem.map((items) => items.price * items.quantily)
      : 0;
  let total = 0;
  const [selectedItems, setSelectedItems] = useState([]);
  const [selectAll, setSelectAll] = useState(false);
  const [totalNumbItem, setTotalNumbItem] = useState(0);

  const [quantities, setQuantities] = useState(
    listDataCart.map((item) => item.quantily)
  );

  const updateQuantity = (itemId, newQuantity) => {
    const updatedQuantities = quantities.map((preQuantily, index) =>
      listDataCart[index].productId === itemId ? newQuantity : preQuantily
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
    const updateCart = listDataCart.filter((item) => item.productId !== itemId);
    dispatch(itemListCart(updateCart));
  };

  const handleCheckbox = (itemId, item) => {
    if (selectedItems.includes(itemId)) {
      setSelectedItems((prevSelectedItems) =>
        prevSelectedItems.filter((id) => id !== itemId)
      );
      setCartItem((prevSelectedItems) =>
        prevSelectedItems.filter((id) => id.productId !== itemId)
      );
      setTotalNumbItem((prevTotalNumbItem) => prevTotalNumbItem - 1);
    } else {
      setSelectedItems((prevSelectedItems) => [...prevSelectedItems, itemId]);
      setCartItem((preItem) => [...preItem, item]);
      setTotalNumbItem((prevTotalNumbItem) => prevTotalNumbItem + 1);
    }
  };

  const handleSelectAll = (item) => {
    if (!selectAll) {
      const allProductIds = listDataCart.map((item) => item.productId);
      setSelectAll(true);
      setSelectedItems(allProductIds);
      setCartItem(item);
    } else {
      setSelectAll(false);
      setSelectedItems([]);
      setCartItem(null);
    }
  };

  const totalPrice =
    cartItem.length > 0
      ? allPriceItem.reduce(
          (accumulator, currentValue) => accumulator + currentValue,
          total
        )
      : 0;

  console.log(total);

  useEffect(() => {
    const newSelectedItems = [...selectedItems];
    if (
      newSelectedItems.length > 0 &&
      newSelectedItems.length === listDataCart.length
    ) {
      setSelectAll(true);
    } else {
      setSelectAll(false);
    }
  }, [selectedItems]);

  useEffect(() => {
    if (selectAll) {
      setTotalNumbItem(listDataCart.length);
    } else {
      setTotalNumbItem(selectedItems.length);
    }
  }, [selectAll, selectedItems]);

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
                      onChange={() => handleSelectAll(listDataCart)}
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
              <div className={style.wrap_cartpay} key={i.productId}>
                <Col span={22}>
                  <Row>
                    <Col span={12} className={style.product_Name}>
                      <Checkbox
                        onChange={() => handleCheckbox(i.productId, i)}
                        checked={selectedItems.includes(i.productId)}
                        id={i.productId}
                        key={i.productId}
                      />
                      <div className={style.img_pay}>
                        <img className={style.img_item} src={i?.image} alt="" />
                        <div
                          className={style.delete_pay_item}
                          onClick={() => deleteItem(i.productId)}
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
                                updateQuantity(
                                  i.productId,
                                  quantities[index] - 1
                                )
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
                            onClick={() =>
                              updateQuantity(i.productId, i.quantily + 1)
                            }
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
                    onChange={() => handleSelectAll(listDataCart)}
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
            onClick={() => navigate(`/`)}
            type="dashed"
          >
            Tiếp tục mua hàng
          </Button>
        </div>
      )}
    </>
  );
};

export default Cartpay;
