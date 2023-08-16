import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Rate, Button, Input } from "antd";

import dataLt from "../../database/laptop";
import style from "./style.module.css";
import { useSelector } from "react-redux";
import { APIService } from "../../services/apiService";
const desc = ["terrible", "bad", "normal", "good", "wonderful"];

const Productions = () => {
  const { id } = useParams();
  const idLaptop = parseInt(id);
  const [listData, setListData] = useState();

  console.log(listData);
  console.log(dataLt);

  const [value, setValue] = useState(3);
  const [count, setCount] = useState(0);
  let inforLaptop = dataLt.filter((item) => item.id === idLaptop);

  async function fetchData() {
    try {
      const data = await APIService.get_ListData();
      setListData(data);
    } catch (error) {}
  }
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className={style.wrap_productions}>
      {inforLaptop?.map((item) => (
        <div className={style.productions_items}>
          <div className={style.productions_items_left}>
            <img className={style.productions_img} src={item?.img} alt="" />
            <div className={style.productions_swiper}>
              swiper a Phương đang fix lòi mồm @@
            </div>
          </div>
          <div className={style.productions_items_right}>
            <h1 className={style.title_productions}>{item?.name}</h1>
            <div className={style.productions_start}>
              <Rate tooltips={desc} onChange={setValue} value={value} />
              {value ? (
                <span className="ant-rate-text">{desc[value - 1]}</span>
              ) : (
                ""
              )}
            </div>
            <div className={style.wrap_productions_prices}>
              <span className={style.productions_new_price}>
                {item?.newPrice}
              </span>
              <span className={style.productions_old_price}>
                {item?.oldPrice}
              </span>
              <span className={style.productions_price_discount}>
                {item?.sale}
              </span>
            </div>
            <div className={style.wrap_productions_quality}>
              <div className={style.wrap_productions_btn_quality}>
                {count < 1 ? (
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
                <span className={style.qualyti}>Quality: {item?.quality}</span>
              </div>
            </div>
            <div className={style.productions_btn}>
              <Button
                className={style.productions_btn_items}
                type={"primary"}
                danger
              >
                Mua Ngay
              </Button>
              <Button
                className={style.productions_btn_items}
                type={"primary"}
                danger
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
