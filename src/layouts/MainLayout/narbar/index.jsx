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
import user_login from "../../../assests/sgv/user-svgrepo-com.svg";
import logo from "../../../assests/banner/logo.png";
import menu_close from "../../../assests/sgv/menu-alt-1-svgrepo-com.svg";
import menu_open from "../../../assests/sgv/menu-alt-1-svgrepo-com.svg";
import InputSearch from "../../../components/InputSearch";
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
    console.log("Clicked cancel button");
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
      i?.title?.toLowerCase()?.includes(e?.toLowerCase())
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
    const result = await APIService.get_ListData();
    setBackupDataSearch(result);
  };

  useEffect(() => {
    getDataSearch();
  }, []);

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
                      onChange={(e) => onSearch(e.target.value)}
                      enterButton
                      allowClear
                      className={style.input_search}
                      onClick={() => setClickSearch(false)}
                      onBlur={() => setClickSearch(true)}
                    />
                    {listSearch && clickSearch === false && (
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
                              <span className={style.title_search}>
                                {e?.title}
                              </span>
                              <span className={style.price_search}>
                                {e?.price}
                              </span>
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
                      <div className={style.wrap_menu}>
                        <div
                          className={style.menu_item}
                          onMouseOver={() => setListKey("lap")}
                          ref={ref}
                        >
                          <span>
                            <svg
                              width="20"
                              height="13"
                              viewBox="0 0 20 13"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <mask
                                id="path-1-inside-1_5068_8551"
                                fill="currentcolor"
                              >
                                <path d="M4.00002 1C3.44774 1 3.00002 1.44772 3.00002 2V8.5C3.00002 9.05229 3.44774 9.5 4.00002 9.5H16C16.5523 9.5 17 9.05229 17 8.5V2C17 1.44772 16.5523 1 16 1H4.00002ZM3.70002 0H10H16.3C16.7774 0 17.2353 0.184374 17.5728 0.512563C17.9104 0.840752 18.1 1.28587 18.1 1.75V8.75C18.1 9.21413 17.9104 9.65925 17.5728 9.98744C17.2353 10.3156 16.7774 10.5 16.3 10.5H3.70002C3.22263 10.5 2.7648 10.3156 2.42723 9.98744C2.08967 9.65925 1.90002 9.21413 1.90002 8.75V1.75C1.90002 1.28587 2.08967 0.840752 2.42723 0.512563C2.7648 0.184374 3.22263 0 3.70002 0Z"></path>
                              </mask>
                              <path
                                d="M4.00002 1C3.44774 1 3.00002 1.44772 3.00002 2V8.5C3.00002 9.05229 3.44774 9.5 4.00002 9.5H16C16.5523 9.5 17 9.05229 17 8.5V2C17 1.44772 16.5523 1 16 1H4.00002ZM3.70002 0H10H16.3C16.7774 0 17.2353 0.184374 17.5728 0.512563C17.9104 0.840752 18.1 1.28587 18.1 1.75V8.75C18.1 9.21413 17.9104 9.65925 17.5728 9.98744C17.2353 10.3156 16.7774 10.5 16.3 10.5H3.70002C3.22263 10.5 2.7648 10.3156 2.42723 9.98744C2.08967 9.65925 1.90002 9.21413 1.90002 8.75V1.75C1.90002 1.28587 2.08967 0.840752 2.42723 0.512563C2.7648 0.184374 3.22263 0 3.70002 0Z"
                                fill="currentcolor"
                              ></path>
                              <path
                                d="M1 12L19 12"
                                stroke="currentcolor"
                                strokeLinecap="round"
                              ></path>
                            </svg>
                          </span>
                          <span>Lap Top</span>
                          <span>
                            <svg
                              width="20"
                              height="13"
                              viewBox="0 0 6 8"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M1.5 1.5L4.5 4L1.5 6.5"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              ></path>
                            </svg>
                          </span>
                        </div>
                        <div
                          className={style.menu_item}
                          onMouseOver={() => setListKey("pc")}
                          ref={ref}
                        >
                          <span>
                            <svg
                              width="20"
                              height="20"
                              viewBox="0 0 20 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <rect
                                x="1"
                                y="19"
                                width="18"
                                height="10"
                                rx="1"
                                transform="rotate(-90 1 19)"
                                stroke="currentcolor"
                              ></rect>
                              <path
                                d="M13 3H17C18.1046 3 19 3.89543 19 5V13C19 14.1046 18.1046 15 17 15H13"
                                stroke="currentcolor"
                              ></path>
                              <path
                                d="M16.5 18.5C16.7761 18.5 17 18.2761 17 18C17 17.7239 16.7761 17.5 16.5 17.5V18.5ZM13 18.5H16.5V17.5H13V18.5Z"
                                fill="currentcolor"
                              ></path>
                              <circle
                                cx="6"
                                cy="5"
                                r="1"
                                fill="currentcolor"
                              ></circle>
                              <circle
                                cx="6"
                                cy="9"
                                r="1"
                                fill="currentcolor"
                              ></circle>
                            </svg>
                          </span>
                          <span>PC</span>
                          <span>
                            <svg
                              width="20"
                              height="13"
                              viewBox="0 0 6 8"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M1.5 1.5L4.5 4L1.5 6.5"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              ></path>
                            </svg>
                          </span>
                        </div>
                        <div
                          className={style.menu_item}
                          onMouseOver={() => setListKey("dv")}
                          ref={ref}
                        >
                          <span>
                            <svg
                              width="18"
                              height="20"
                              viewBox="0 0 18 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M9 3.5V6M9 3.5C9 3.00555 9.14662 2.5222 9.42133 2.11108C9.69603 1.69995 10.0865 1.37952 10.5433 1.1903C11.0001 1.00108 11.5028 0.951575 11.9877 1.04804C12.4727 1.1445 12.9181 1.3826 13.2678 1.73223C13.6174 2.08187 13.8555 2.52732 13.952 3.01228C14.0484 3.49723 13.9989 3.99989 13.8097 4.45671C13.6205 4.91352 13.3 5.30397 12.8889 5.57867C12.4778 5.85338 11.9945 6 11.5 6H9M9 3.5C9 3.00555 8.85338 2.5222 8.57867 2.11108C8.30397 1.69995 7.91352 1.37952 7.45671 1.1903C6.99989 1.00108 6.49723 0.951575 6.01227 1.04804C5.52732 1.1445 5.08187 1.3826 4.73223 1.73223C4.3826 2.08187 4.1445 2.52732 4.04804 3.01228C3.95157 3.49723 4.00108 3.99989 4.1903 4.45671C4.37952 4.91352 4.69995 5.30397 5.11108 5.57867C5.5222 5.85338 6.00555 6 6.5 6H9"
                                stroke="currentcolor"
                                strokeMiterlimit="10"
                                strokeLinecap="round"
                              ></path>
                              <path
                                d="M15.6667 6H2.33333C1.59695 6 1 6.63959 1 7.42857V9.57143C1 10.3604 1.59695 11 2.33333 11H15.6667C16.403 11 17 10.3604 17 9.57143V7.42857C17 6.63959 16.403 6 15.6667 6Z"
                                stroke="currentcolor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              ></path>
                              <path
                                d="M16 10.7895V16.9474C16 17.4918 15.7788 18.0139 15.3849 18.3988C14.9911 18.7837 14.457 19 13.9 19H4.1C3.54305 19 3.0089 18.7837 2.61508 18.3988C2.22125 18.0139 2 17.4918 2 16.9474V10.7895M9 6V19"
                                stroke="currentcolor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              ></path>
                            </svg>
                          </span>
                          Dich Vu
                          <span></span>
                          <span>
                            <svg
                              width="20"
                              height="13"
                              viewBox="0 0 6 8"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M1.5 1.5L4.5 4L1.5 6.5"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              ></path>
                            </svg>
                          </span>
                        </div>
                      </div>
                    )}
                    {listKey && (
                      <div className={style.list_menu}>
                        {backupdata?.map((e) => (
                          <>
                            <ul className={style.wrap_list}>
                              <li className={style.list_item_active}>
                                {e?.title}
                              </li>
                              <li className={style.list_item}>
                                {e?.titleItem0}
                              </li>
                              <li className={style.list_item}>
                                {e?.titleItem00}
                              </li>
                            </ul>
                            <ul className={style.wrap_list}>
                              <li className={style.list_item_active}>
                                {e?.title1}
                              </li>
                              <li className={style.list_item}>
                                {e?.titleItem1}
                              </li>
                              <li className={style.list_item}>
                                {e?.titleItem11}
                              </li>
                            </ul>
                            <ul className={style.wrap_list}>
                              <li className={style.list_item_active}>
                                {e?.title2}
                              </li>
                              <li className={style.list_item}>
                                {e?.titleItem2}
                              </li>
                              <li className={style.list_item}>
                                {e?.titleItem22}
                              </li>
                            </ul>
                            <ul className={style.wrap_list}>
                              <li className={style.list_item_active}>
                                {e?.title3}
                              </li>
                              <li className={style.list_item}>
                                {e?.titleItem3}
                              </li>
                              <li className={style.list_item}>
                                {e?.titleItem33}
                              </li>
                            </ul>{" "}
                            <ul className={style.wrap_list}>
                              <li className={style.list_item_active}>
                                {e?.title4}
                              </li>
                              <li className={style.list_item}>
                                {e?.titleItem4}
                              </li>
                              <li className={style.list_item}>
                                {e?.titleItem44}
                              </li>
                            </ul>
                            <ul className={style.wrap_list}>
                              <li className={style.list_item_active}>
                                {e?.title5}
                              </li>
                              <li className={style.list_item}>
                                {e?.titleItem5}
                              </li>
                              <li className={style.list_item}>
                                {e?.titleItem55}
                              </li>
                            </ul>
                          </>
                        ))}
                      </div>
                    )}
                  </Col>

                  <Col span={3}>
                    <NavLink className={style.element_narbar}>
                      <p>Hotline</p>
                    </NavLink>
                  </Col>
                  <Col span={3}>
                    <NavLink className={style.element_narbar} to="/cart">
                      <Badge count={cartQualyti}>
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
                    <NavLink
                      className={style.element_narbar}
                      onClick={showModal}
                    >
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
