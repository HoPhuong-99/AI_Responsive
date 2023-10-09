import React, { useEffect, useRef, useState } from "react";
import style from "./style.module.css";
import { NavLink } from "react-router-dom";
import { Avatar, Badge, Button, Input, Menu, Modal } from "antd";
import { useSelector } from "react-redux";
import { Col, Row } from "antd";
import { APIService } from "../../../services/apiService";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import shopping_cart from "../../../assests/sgv/shopping-cart-svgrepo-com.svg";
import phone_contact from "../../../assests/sgv/phone-calling-svgrepo-com.svg";
import user_login from "../../../assests/sgv/user-svgrepo-com.svg";
import favorite_item from "../../../assests/sgv/heart-svgrepo-com.svg";
import logo from "../../../assests/banner/logo.png";
import { ItemsSearch, InputSearchItems } from "../../../redux/searchSlice";
import Login from "../../../components/Login&Register/Login";
import Register from "../../../components/Login&Register/Register";

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

const fakeMenu = [
  {
    key: "lap",
    title: "Thương hiệu",
    titleItem0: "ASUS",
    titleItem00: "ACER",
    title1: "Price",
    titleItem1: "Dưới 15TR",
    titleItem11: "Trên 15TR",
    title2: "CPU Intel",
    titleItem2: "Intel Core I3",
    titleItem22: "Intel Core I5",
    title3: "usage needs",
    titleItem3: "studio",
    titleItem33: "student",
    title4: "accessory",
    titleItem4: "Ram",
    titleItem44: "SSD",
    title5: "Accessories",
    titleItem5: "Balo",
    titleItem55: "Radiator Base",
  },
  {
    key: "pc",
    title: "Thương hiệu1",
    titleItem0: "ASUS",
    titleItem00: "ACER",
    title1: "Price",
    titleItem1: "Dưới 15TR",
    titleItem11: "Trên 15TR",
    title2: "CPU Intel",
    titleItem2: "Intel Core I3",
    titleItem22: "Intel Core I5",
    title3: "usage needs",
    titleItem3: "studio",
    titleItem33: "student",
    title4: "accessory",
    titleItem4: "Ram",
    titleItem44: "SSD",
    title5: "Accessories",
    titleItem5: "Balo",
    titleItem55: "Radiator Base",
  },

  {
    key: "dv",
    title: "Thương hiệu2",
    titleItem0: "ASUS",
    titleItem00: "ACER",
    title1: "Price",
    titleItem1: "Dưới 15TR",
    titleItem11: "Trên 15TR",
    title2: "CPU Intel",
    titleItem2: "Intel Core I3",
    titleItem22: "Intel Core I5",
    title3: "usage needs",
    titleItem3: "studio",
    titleItem33: "student",
    title4: "accessory",
    titleItem4: "Ram",
    titleItem44: "SSD",
    title5: "Accessories",
    titleItem5: "Balo",
    titleItem55: "Radiator Base",
  },
];

const Narbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [current, setCurrent] = useState("mail");
  const [visible, setVisible] = useState(false);
  const [listKey, setListKey] = useState("");
  const [backupdata, setBackupdata] = useState([]);
  const [listSearch, setListSearch] = useState("");
  const [listData, setListData] = useState([]);
  const [backupDataSearch, setBackupDataSearch] = useState([]);
  const [totalListSearch, setTotalListSearch] = useState([]);
  const [clickSearch, setClickSearch] = useState(false);
  const [checkRegister, setCheckRegister] = useState(false);

  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [modalText, setModalText] = useState("Content of the modal");

  const showModal = () => {
    setOpen(true);
  };

  const handleOk = () => {
    setModalText("The modal will be closed after two seconds");
    setConfirmLoading(true);
    setTimeout(() => {
      setOpen(false);
      setConfirmLoading(false);
    }, 2000);
  };

  const handleCancel = () => {
    setOpen(false);
  };

  const cartQualyti = useSelector((state) => state.cartSlice?.cart);
  const ref = useRef(null);

  const handleClickOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      setVisible(false);
      setListKey("");
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const onSearch = (e) => {
    setListSearch(e);
    if (e?.length === 0) {
      return setListData([]);
    }

    const fillterSearch = backupDataSearch?.filter((i) =>
      i?.productName?.toLowerCase()?.includes(e?.toLowerCase())
    );
    const fillAraySearch = fillterSearch?.slice(0, 5);
    if (fillterSearch.length > 5) {
      setListData(fillAraySearch);
    } else {
      setListData(fillterSearch);
    }
    setTotalListSearch(fillterSearch);
    dispatch(ItemsSearch(fillterSearch));
    dispatch(InputSearchItems(e));
  };

  useEffect(() => {
    const filldata = fakeMenu?.filter((e) => e?.key === listKey);
    setBackupdata(filldata);
  }, [listKey]);

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
              children: [
                {
                  label: "Laptop Mới",
                  key: "laptop_new",
                },
              ],
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

  const getDataSearch = async () => {
    const result = await APIService.ListProducts();
    setBackupDataSearch(result?.data);
  };

  useEffect(() => {
    getDataSearch();
  }, []);

  return (
    <div className={style.container_narbar}>
      <Col xxl={16} xl={20} lg={24} md={24}>
        <Row justify={"space-between"}>
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
          <Col span={12} className={style.navbar_inputSearch}>
            <Col span={22}>
              <Search
                placeholder="input search text"
                onChange={(e) => onSearch(e.target.value)}
                enterButton
                allowClear
                className={style.input_search}
                onClick={() => setClickSearch(false)}
                onBlur={() => setClickSearch(true)}
              />
              {listSearch && (
                <div className={style.container_search}>
                  {listData.map((e, key) => (
                    <div
                      className={style.wrap_items_search}
                      key={key}
                      onClick={(el) => {
                        el.preventDefault();
                        navigate(`/productions/${e?.id}`);
                        setClickSearch(true);
                      }}
                    >
                      <div className={style.items_search_left}>
                        <span className={style.title_search}>{e?.title}</span>
                        <span className={style.price_search}>{e?.price}</span>
                      </div>
                      <div className={style.items_search_right}>
                        <img
                          className={style.img_search}
                          src={e?.image}
                          alt=""
                        />
                      </div>
                    </div>
                  ))}
                  <div className={style.total_search}>
                    {totalListSearch?.length !== 0 ? (
                      <span
                        onClick={() => {
                          navigate("/search");
                          setClickSearch(true);
                        }}
                      >
                        Xem thêm {totalListSearch?.length} sản phẩm
                      </span>
                    ) : (
                      <span>Không có sản phẩm nào</span>
                    )}
                  </div>
                </div>
              )}
            </Col>
          </Col>

          <Col span={8}>
            <Row justify={"space-evenly"}>
              <Col span={4}>
                <NavLink className={style.element_narbar}>
                  <Avatar src={phone_contact} shape="square" size="small" />
                  <p>Hotline</p>
                </NavLink>
              </Col>
              {/* <Col span={4}>
                <NavLink className={style.element_narbar} to="/cart">
                  <Badge>
                    <Avatar src={favorite_item} shape="square" size="small" />
                  </Badge>
                  <p>Yêu Thích</p>
                </NavLink>
              </Col> */}
              <Col span={4}>
                <NavLink className={style.element_narbar} to="/cart">
                  <Badge count={cartQualyti} size="small">
                    <Avatar src={shopping_cart} shape="square" size="small" />
                  </Badge>
                  <p>Giỏ Hàng</p>
                </NavLink>
              </Col>
              <Col span={4}>
                <NavLink className={style.element_narbar} onClick={showModal}>
                  <Avatar src={user_login} shape="square" size="small" />
                  <p>Đăng nhập</p>
                </NavLink>
                <Modal
                  open={open}
                  confirmLoading={confirmLoading}
                  onCancel={handleCancel}
                  onOk={handleOk}
                  footer={null}
                  className={style.popup_Login}
                  wrapClassName={style.popup_Login}
                >
                  {!checkRegister ? (
                    <Login setCheckRegister={setCheckRegister} />
                  ) : (
                    <Register setCheckRegister={setCheckRegister} />
                  )}
                </Modal>
              </Col>
            </Row>
          </Col>
        </Row>
      </Col>
    </div>
  );
};

export default Narbar;
