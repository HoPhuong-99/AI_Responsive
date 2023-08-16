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

  const [listData, setListData] = useState();

  async function fetchData() {
    try {
      const data = await APIService.get_ListData();
      setListData(data);
      dispatch(setItemProductions(data));
    } catch (error) {}
  }
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className={style.wrap_produce}>
      <Col xxl={24}>
        <Row gutter={(20, 20)}>
          {listData?.map((item) => (
            <>
              <Col
                span={6}
                className={style.infor_laptop}
                key={item.id}
                onClick={() => navigate(`/productions/${item.id}`)}
              >
                <img src={item?.image} alt="" />
                <h1 className={style.produce_title}>{item?.title}</h1>
                <span className={style.produce_price}>{item?.price} $</span>
                <span className={style.sale}>{item?.category}</span>
              </Col>
            </>
          ))}
        </Row>
      </Col>
    </div>
  );
};

export default Produce;
