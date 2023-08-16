import React, { useEffect, useState } from "react";
import { Col, Image, Row, Select, Space } from "antd";
import style from "./style.module.css";
import { useNavigate } from "react-router-dom";
import { APIService } from "../../services/apiService";
import { useDispatch } from "react-redux";
import { setItemProductions } from "../../redux/productionsSlice";
import SortMenu from "../SortMenu";

export const AllProduction = () => {
  const navigate = useNavigate();
  const [sortOrder, setSortOrder] = useState(null);

  const [listData, setListData] = useState();

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
      <SortMenu listData={listData} setListData={setListData} />
      <Col xxl={24}>
        <Row gutter={[20, 20]}>
          {listData?.map((item) => (
            <>
              <Col
                span={6}
                key={item.id}
                onClick={() => navigate(`/productions/${item.id}`)}
              >
                <div className={style.infor_laptop}>
                  <img src={item?.image} alt="" />
                  <h1 className={style.produce_title}>{item?.title}</h1>
                  <span className={style.produce_price}>{item?.price} $</span>
                  <span className={style.sale}>{item?.category}</span>
                </div>
              </Col>
            </>
          ))}
        </Row>
      </Col>
    </div>
  );
};
