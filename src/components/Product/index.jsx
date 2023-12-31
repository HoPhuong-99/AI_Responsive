import React, { useEffect, useRef, useState } from "react";
import { Col, Image, Row } from "antd";
import style from "./style.module.css";
import { useNavigate } from "react-router-dom";
import { APIService } from "../../services/apiService";
import { useDispatch } from "react-redux";
import { setItemProductions } from "../../redux/productionsSlice";
import { HeartOutlined } from "@ant-design/icons";

const Produce = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [listData, setListData] = useState([]);
  const [favorite, setFavorite] = useState([]);

  const ref = useRef();

  let listProductions = listData?.slice(0, 8);

  const fetchData = async () => {
    try {
      const data = await APIService.ListProducts();
      setListData(data?.data);
    } catch (error) {}
  };
  useEffect(() => {
    fetchData();
  }, []);

  const handleFavorite = (item) => {
    // const changeBg = listProductions.filter(
    //   () => listProductions.productId === item,
    //   setFavorite(!favorite)
    // );
    setFavorite(item);
  };

  return (
    <div className={style.wrap_produce}>
      <Col xxl={24}>
        <Row gutter={[20, 20]}>
          {listProductions?.map((item) => (
            <Col
              span={4}
              key={item.id}
              onClick={() => {
                navigate(`/productions/${item.productId}`);
              }}
              ref={ref}
            >
              <div className={style.infor_laptop}>
                <div className={style.box_Product}>
                  <img src={item?.image} alt="" />
                </div>
                <h1 className={style.produce_title}>{item?.title}</h1>
                <div className={style.price_Product}>
                  <span className={style.name_Product}>
                    {item?.productName}
                    <span className={style.price}>{item?.price} $</span>
                  </span>
                  <HeartOutlined
                    className={
                      favorite === item?.productId
                        ? `${style.icon_Favorite} ${style.bgFavotire_Icon}`
                        : `${style.icon_Favorite} ${style.bgDefaut_Icon}`
                    }
                    onClick={() => handleFavorite(item.productId)}
                  />
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Col>
    </div>
  );
};

export default Produce;
