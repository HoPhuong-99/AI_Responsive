import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Rate, Button, Input } from "antd";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { setItemcart } from "../../redux/cartSlice";
import style from "./style.module.css";
import { APIService } from "../../services/apiService";
const desc = ["terrible", "bad", "normal", "good", "wonderful"];

const Productions = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();
  const idLaptop = parseInt(id);
  const [listData, setListData] = useState();

  console.log("lits", listData, id);

  const [value, setValue] = useState(3);
  const [count, setCount] = useState(1);
  let inforLaptop = listData?.filter((item) => item?.id === idLaptop);

  const fetchData = async () => {
    try {
      const result = await APIService.get_ListData();
      setListData(result);
    } catch (error) {}
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleAddCart = () => {
    dispatch(setItemcart(count));
  };

  return (
    <div className={style.wrap_productions}>
      {inforLaptop?.map((item, key) => (
        <div className={style.productions_items} key={key}>
          <div className={style.productions_items_left}>
            <img className={style.productions_img} src={item?.image} alt="" />
            <div className={style.productions_swiper}>
              swiper a Phương đang fix lòi mồm @@
            </div>
          </div>
          <div className={style.productions_items_right}>
            <h1 className={style.title_productions}>{item?.title}</h1>
            <div className={style.productions_start}>
              <Rate
                tooltips={desc}
                onChange={setValue}
                value={item?.rating?.rate}
              />
              {item?.rating?.rate ? (
                <span className="ant-rate-text">
                  {desc[item?.rating?.rate - 1]}
                </span>
              ) : (
                ""
              )}
            </div>
            <div className={style.wrap_productions_prices}>
              <span className={style.productions_new_price}>{item?.price}</span>
              <span className={style.productions_old_price}>
                {item?.price - 10}
              </span>
              <span className={style.productions_price_discount}>34%</span>
            </div>
            <div className={style.wrap_productions_quality}>
              <div className={style.wrap_productions_btn_quality}>
                {count <= 1 ? (
                  <Button>-</Button>
                ) : (
                  <Button onClick={() => setCount(count - 1)}>-</Button>
                )}
                <Input
                  className={style.productions_input_quality}
                  value={count}
                />

                <Button
                  onClick={() => setCount(count + 1)}
                  style={{ marginRight: "20px" }}
                >
                  +
                </Button>
                <span className={style.qualyti}>
                  Quality: {item?.rating?.count}
                </span>
              </div>
            </div>
            <div className={style.productions_btn}>
              <Button
                className={style.productions_btn_items}
                type={"primary"}
                danger
                onClick={() => navigate("/cart")}
              >
                Mua Ngay
              </Button>
              <Button
                className={style.productions_btn_items}
                type={"primary"}
                danger
                onClick={handleAddCart}
              >
                Add Cart
              </Button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Productions;
