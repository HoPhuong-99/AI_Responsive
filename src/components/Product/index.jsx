import React, { useEffect, useState } from "react";
import { Col, Image, Row } from "antd";
import style from "./style.module.css";
import { useNavigate } from "react-router-dom";
import { APIService } from "../../services/apiService";
import { useDispatch } from "react-redux";
import { setItemProductions } from "../../redux/productionsSlice";

const Produce = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [listData, setListData] = useState([]);

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
            >
              <div className={style.infor_laptop}>
                <div className={style.box_Product}>
                  <img src={item?.image} alt="" />
                </div>
                <h1 className={style.produce_title}>{item?.title}</h1>
                <span className={style.produce_price}>{item?.price} $</span>
              </div>
            </Col>
          ))}
        </Row>
      </Col>
    </div>
  );
};

export default Produce;
