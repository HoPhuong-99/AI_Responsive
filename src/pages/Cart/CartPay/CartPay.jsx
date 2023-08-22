import React, { useState } from "react";
import { Button, Input } from "antd";
import { useDispatch, useSelector } from "react-redux";
import {
  DeleteOutlined,
  CaretUpOutlined,
  CaretDownOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

import style from "./style.module.css";
import lap1 from "../../../assests/produce/may1.jpg";
import { itemListCart } from "../../../redux/cartSlice";

const Cartpay = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const listDataCart = useSelector((state) => state.cartSlice?.listCart);
  const [upDown, setUpDown] = useState(false);
  const [count, setCount] = useState(0);
  const [total, setTotal] = useState(null);

  let allPriceItem = listDataCart.map((items) => items.price * items.quantily);

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

  const totalPrice = allPriceItem.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    total
  );

  return (
    <>
      {listDataCart.length > 0 ? (
        <div className={style.hero_pay}>
          {listDataCart?.map((i, index) => (
            <div className={style.wrap_cartpay} key={i.id}>
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
              <div className={style.name_cart}>
                <h3 className={style.title_cart}>{i?.title}</h3>
              </div>
              <div className={style.price_cart}>
                <span className={style.price_new}>{i.price * i.quantily}</span>
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
                  <Input className={style.input_qualyty} value={i.quantily} />
                  <Button onClick={() => updateQuantity(i.id, i.quantily + 1)}>
                    +
                  </Button>
                </div>
              </div>
            </div>
          ))}
          <div className={style.discount}>
            <Button
              className={style.btn_discount}
              onClick={() => setUpDown(!upDown)}
            >
              <svg
                className={style.icont_discount}
                viewBox="0 0 20 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.8 4L14 5.2L7.2 12L6 10.8L12.8 4ZM2 0H18C19.11 0 20 0.89 20 2V6C19.4696 6 18.9609 6.21071 18.5858 6.58579C18.2107 6.96086 18 7.46957 18 8C18 8.53043 18.2107 9.03914 18.5858 9.41421C18.9609 9.78929 19.4696 10 20 10V14C20 15.11 19.11 16 18 16H2C1.46957 16 0.960859 15.7893 0.585786 15.4142C0.210714 15.0391 0 14.5304 0 14V10C1.11 10 2 9.11 2 8C2 7.46957 1.78929 6.96086 1.41421 6.58579C1.03914 6.21071 0.530433 6 0 6V2C0 1.46957 0.210714 0.960859 0.585786 0.585786C0.960859 0.210714 1.46957 0 2 0ZM2 2V4.54C2.60768 4.8904 3.11236 5.39466 3.46325 6.00205C3.81415 6.60944 3.9989 7.29854 3.9989 8C3.9989 8.70146 3.81415 9.39056 3.46325 9.99795C3.11236 10.6053 2.60768 11.1096 2 11.46V14H18V11.46C17.3923 11.1096 16.8876 10.6053 16.5367 9.99795C16.1858 9.39056 16.0011 8.70146 16.0011 8C16.0011 7.29854 16.1858 6.60944 16.5367 6.00205C16.8876 5.39466 17.3923 4.8904 18 4.54V2H2ZM7.5 4C8.33 4 9 4.67 9 5.5C9 6.33 8.33 7 7.5 7C6.67 7 6 6.33 6 5.5C6 4.67 6.67 4 7.5 4ZM12.5 9C13.33 9 14 9.67 14 10.5C14 11.33 13.33 12 12.5 12C11.67 12 11 11.33 11 10.5C11 9.67 11.67 9 12.5 9Z"
                  fill="#1982F9"
                ></path>
              </svg>
              Sử dụng mã giảm giá
              {upDown ? <CaretUpOutlined /> : <CaretDownOutlined />}
            </Button>
            {!upDown && (
              <div className={style.input_voucher}>
                <Input
                  className={style.input_items}
                  placeholder="Input Voucher"
                />
                <Button type="primary">Accept</Button>
              </div>
            )}
          </div>
          <div className={style.order}>
            <div className={style.wrap_transport}>
              <span className={style.sub_transport}>transport fee</span>
              <span className={style.fee}>Free</span>
            </div>
            <div className={style.total}>
              <span className={style.sub_total}>Total Money</span>
              <span className={style.sub_price}>{totalPrice}</span>
            </div>
            <Button className={style.btn_oder} danger type="primary">
              Order Now
            </Button>
          </div>
        </div>
      ) : (
        <div className={style.cart_emty}>
          <span className={style.sub_emty}>Giỏ hàng của bạn đang trống</span>
          <Button className={style.btn_emty} onClick={() => navigate(`/`)}>
            Tiếp tục mua hàng
          </Button>
        </div>
      )}
    </>
  );
};

export default Cartpay;
