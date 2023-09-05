import React from "react";
import { Col, Row } from "antd";
import style from "./style.module.css";
import { useNavigate } from "react-router-dom";

const RelatedProductions = (props) => {
  const navigate = useNavigate();
  const { listRelatedItem } = props;

  return (
    <>
      <div className={style.container_RelatedProduct}>
        <h1 className={style.title_RelatedProduct}> Related Production</h1>
        <Col xxl={24}>
          <Row gutter={[30, 30]}>
            {listRelatedItem?.map((item) => (
              <>
                <Col
                  span={6}
                  key={item.id}
                  onClick={() =>
                    window.location.assign(`/productions/${item.id}`)
                  }
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
    </>
  );
};

export default RelatedProductions;
