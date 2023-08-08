import React from "react";
import style from "./style.module.css";
import { NavLink } from "react-router-dom";
import { Avatar, Badge, Input, Space } from "antd";
import { Col, Row } from "antd";
import shopping_cart from "../../../assests/sgv/shopping-cart-svgrepo-com.svg";
import user_login from "../../../assests/sgv/user-svgrepo-com.svg";

const { Search } = Input;

const Narbar = () => {
  const onSearch = () => {};

  return (
    <div className={style.container_narbar}>
      <Col xxl={16}>
        <Row>
          <Col span={4}>
            <div className={style.logo_narbar}></div>
          </Col>
          <Col span={20}>
            <Row gutter={(20, 20)}>
              <Col span={24}>
                <div className={style.contents_narbar}>
                  <Col span={12}>
                    <Search
                      placeholder="input search text"
                      onSearch={onSearch}
                      enterButton
                    />
                  </Col>
                  <Col span={4}>
                    <NavLink className={style.element_narbar}>
                      <p>Hotline</p>
                    </NavLink>
                  </Col>
                  <Col span={4}>
                    <NavLink className={style.element_narbar}>
                      <p>Dịch vụ</p>
                    </NavLink>
                  </Col>
                  <Col span={4}>
                    <NavLink className={style.element_narbar}>
                      <Badge count={1}>
                        <Avatar
                          src={shopping_cart}
                          shape="square"
                          size="small"
                        />
                      </Badge>
                      <p>Giỏ Hàng</p>
                    </NavLink>
                  </Col>
                  <Col span={4}>
                    <NavLink className={style.element_narbar}>
                      <Avatar src={user_login} shape="square" size="small" />
                      <p>Đăng nhập</p>
                    </NavLink>
                  </Col>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Col>
    </div>
  );
};

export default Narbar;
