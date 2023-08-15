import React, { useEffect, useRef, useState } from "react";
import style from "./style.module.css";
import { NavLink } from "react-router-dom";
import { Avatar, Badge, Input, Menu } from "antd";
import { Col, Row } from "antd";
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import shopping_cart from "../../../assests/sgv/shopping-cart-svgrepo-com.svg";
import user_login from "../../../assests/sgv/user-svgrepo-com.svg";
import logo from "../../../assests/sgv/manchester-united.svg";
import menu_close from "../../../assests/sgv/menu-alt-1-svgrepo-com.svg";
import menu_open from "../../../assests/sgv/menu-alt-1-svgrepo-com.svg";

const { Search } = Input;

function getItem(label, key, icon, children, type, text) {
  return {
    key,
    icon,
    children,
    label,
    type,
    text,
  };
}

const items = [
  {
    label: "Laptop",
    key: "Laptop",
    icon: <SettingOutlined />,
    children: [
      {
        type: "group",
        label: "Laptop",
        children: [
          {
            label: "Laptop Mới",
            key: "laptop_new",
          },
          {
            label: "Laptop Cũ",
            key: "laptop_old",
          },
        ],
      },
      {
        type: "group",
        label: "Linh kiện Laptop",
        children: [
          {
            label: "Option 3",
            key: "setting:3",
          },
          {
            label: "Option 4",
            key: "setting:4",
          },
        ],
      },
    ],
  },
  {
    label: "PC",
    key: "PC",
    icon: <SettingOutlined />,
    children: [
      {
        type: "group",
        label: "Thể loại",
        children: [
          {
            label: "Văn phòng",
            key: "office_pc",
          },
          {
            label: "Gaming",
            key: "game_pc",
          },
        ],
      },
      {
        type: "group",
        label: "",
        children: [
          {
            label: "Option 3",
            key: "setting:3",
          },
          {
            label: "Option 4",
            key: "setting:4",
          },
        ],
      },
    ],
  },
  {
    label: "Dịch vụ",
    key: "Service",
    icon: <SettingOutlined />,
    children: [
      {
        type: "group",
        label: "Thể loại",
        children: [
          {
            label: "Văn phòng",
            key: "office_pc",
          },
          {
            label: "Gaming",
            key: "game_pc",
          },
        ],
      },
      {
        type: "group",
        label: "",
        children: [
          {
            label: "Option 3",
            key: "setting:3",
          },
          {
            label: "Option 4",
            key: "setting:4",
          },
        ],
      },
    ],
  },
];
const Narbar = () => {
  const [current, setCurrent] = useState("mail");
  const [visible, setVisible] = useState(false);

  const ref = useRef(null);

  const handleClickOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      setVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const onSearch = () => {};
  const onClick = (e) => {
    console.log("click ", e);
  };

  return (
    <div className={style.container_narbar}>
      <Col xxl={16} xl={20} lg={24} md={24}>
        <Row>
          <Col span={4}>
            <div className={style.logo_narbar}>
              <NavLink to="/">
                <Avatar
                  src={logo}
                  shape="square"
                  size={{ xs: 24, sm: 32, md: 40, lg: 40, xl: 50, xxl: 50 }}
                  className=""
                />
              </NavLink>
            </div>
          </Col>
          <Col span={20}>
            <Row gutter={(20, 20)}>
              <Col span={24}>
                <div className={style.contents_narbar}>
                  <Col span={9}>
                    <Search
                      placeholder="input search text"
                      onSearch={onSearch}
                      enterButton
                    />
                  </Col>
                  <Col span={3}>
                    <div
                      className={style.element_narbar}
                      onClick={() => setVisible(!visible)}
                      ref={ref}
                    >
                      <Avatar src={menu_close} shape="square" size="small" />
                      <p>Danh Mục</p>
                    </div>
                    {visible && (
                      <Menu
                        onClick={onClick}
                        selectedKeys={[current]}
                        mode="horizontal"
                        items={items}
                        className={style.menu_options}
                      />
                    )}
                  </Col>

                  <Col span={3}>
                    <NavLink className={style.element_narbar}>
                      <p>Hotline</p>
                    </NavLink>
                  </Col>
                  <Col span={3}>
                    <NavLink className={style.element_narbar} to="/cart">
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
                  <Col span={3}>
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
