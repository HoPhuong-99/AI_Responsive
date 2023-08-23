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

  let listProductions = listData?.slice(0, 8);

  const fetchData = async () => {
    try {
      const data = await APIService.get_ListData();
      setListData(data);
    } catch (error) {}
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className={style.wrap_produce}>
      <Col xxl={24}>
        <Row gutter={[30, 30]}>
          {listProductions?.map((item) => (
            <>
              <Col
                span={6}
                key={item.id}
                onClick={() => navigate(`/productions/${item.id}`)}
              >
                <div className={style.infor_laptop}>
                  <Row gutter={[20, 20]} justify={"center"}>
                    <Col span={20}>
                      <img src={item?.image} alt="" />
                    </Col>
                    <Row>
                      <Col span={22}>
                        <h1 className={style.produce_title}>{item?.title}</h1>
                      </Col>
                      <Col span={22}>
                        <span className={style.produce_price}>
                          {item?.price} $
                        </span>
                      </Col>
                      <Col span={22}>
                        <span className={style.sale}>{item?.category}</span>
                      </Col>
                    </Row>
                  </Row>
                </div>
              </Col>
            </>
          ))}
        </Row>
      </Col>
    </div>
  );
};

export default Produce;
