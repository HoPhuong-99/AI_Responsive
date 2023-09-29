import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Rate, Button, Input, Table } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Thumbs, FreeMode, Navigation } from "swiper/modules";

import { setItemcart, itemListCart } from "../../redux/cartSlice";
import style from "./style.module.css";
import { APIService } from "../../services/apiService";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/thumbs";
import hinh1 from "../../assests/swiper/a.jpg";
import hinh2 from "../../assests/swiper/b.jpg";
import hinh3 from "../../assests/swiper/c.jpg";
import hinh4 from "../../assests/swiper/d.jpg";
import hinh5 from "../../assests/swiper/e.png";
import RelatedProductions from "../../components/Product/RelatedProduct";
const desc = ["terrible", "bad", "normal", "good", "wonderful"];

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Profile",
    dataIndex: "profile",
    key: "profile",
  },
];

const Productions = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();
  const idLaptop = parseInt(id);
  const [listData, setListData] = useState();
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const [value, setValue] = useState(3);
  const [count, setCount] = useState(1);

  let inforLaptop = listData?.filter((item) => item?.productId === idLaptop);

  let listCart = useSelector((state) => state.cartSlice.listCart);

  const fetchData = async () => {
    try {
      const result = await APIService.ListProducts();
      setListData(result?.data);
    } catch (error) {}
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleAddCart = async (item) => {
    const addItem = listCart.find(
      (prevItem) => prevItem?.productId === item?.productId
    );

    try {
      if (addItem) {
        const updatedList = listCart.map((prevItem) =>
          prevItem?.productId === item?.productId
            ? { ...prevItem, quantily: prevItem.quantily + count }
            : prevItem
        );
        dispatch(itemListCart(updatedList));
        dispatch(setItemcart(count));
      } else {
        dispatch(itemListCart([...listCart, { ...item, quantily: count }]));
        dispatch(setItemcart(count));
      }
    } catch {}
  };

  const dataSource = [
    {
      name: "cpu",
      profile: listData?.[0]?.cpu,
    },
    {
      name: "details",
      profile: listData?.[0]?.details,
    },
    {
      name: "display",
      profile: listData?.[0]?.display,
    },
    {
      name: "memory",
      profile: listData?.[0]?.memory,
    },
    {
      name: "operatingSystem",
      profile: listData?.[0]?.operatingSystem,
    },
    {
      name: "productName",
      profile: listData?.[0]?.productName,
    },
    {
      name: "ram",
      profile: listData?.[0]?.ram,
    },
    {
      name: "size",
      profile: listData?.[0]?.size,
    },
    {
      name: "vga",
      profile: listData?.[0]?.vga,
    },
    {
      name: "weight",
      profile: listData?.[0]?.weight,
    },
  ];

  return (
    <div className={style.hero}>
      <div className={style.breadcrumb}>
        <div className={style.breadcrumb_home} onClick={() => navigate("/")}>
          <span>
            <svg
              width="16"
              height="14"
              viewBox="0 0 16 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.25895 13.1594V8.95647H9.73718V13.1594C9.73718 13.6217 10.1285 14 10.6067 14H13.2154C13.6937 14 14.085 13.6217 14.085 13.1594V7.27529H15.5632C15.9632 7.27529 16.1545 6.79616 15.8502 6.54398L8.58067 0.21435C8.25024 -0.07145 7.7459 -0.07145 7.41546 0.21435L0.145957 6.54398C-0.149693 6.79616 0.0329144 7.27529 0.432911 7.27529H1.91116V13.1594C1.91116 13.6217 2.30246 14 2.78072 14H5.38939C5.86765 14 6.25895 13.6217 6.25895 13.1594Z"
                fill="#1982F9"
              ></path>
            </svg>
          </span>
          <span>Trang chủ</span>
        </div>
        <div>/</div>
        {inforLaptop?.map((e, key) => (
          <div className={style.breadcrumb_items} key={key}>
            {e?.productName}
          </div>
        ))}
      </div>
      <div className={style.wrap_productions}>
        <div className={style.product_left}>
          <Swiper
            spaceBetween={10}
            thumbs={{ swiper: thumbsSwiper }}
            modules={[FreeMode, Navigation, Thumbs]}
            // multipleActiveThumbs={true}
            // slideActiveClass="active"
          >
            {inforLaptop?.map((e) => (
              <SwiperSlide>
                <img className={style.productions_img} src={e?.image} alt="" />
              </SwiperSlide>
            ))}
          </Swiper>
          <Swiper
            onSwiper={setThumbsSwiper}
            spaceBetween={1}
            slidesPerView={6}
            freeMode={true}
            watchSlidesProgress={true}
            navigation={false}
            modules={[FreeMode, Navigation, Thumbs]}
            // multipleActiveThumbs={true}
            // slideActiveClass="active"
          >
            {inforLaptop?.map((e) => (
              <SwiperSlide>
                <img
                  className={style.productions_img_items}
                  src={e?.image}
                  url=""
                  alt=""
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className={style.product_right}>
          {inforLaptop?.map((item, key) => (
            <div className={style.productions_items} key={key}>
              <div className={style.productions_items_right}>
                <h1 className={style.title_productions}>{item?.cpu}</h1>
                <div className={style.productions_start}>
                  <Rate
                    tooltips={desc}
                    onChange={setValue}
                    value={item?.rating?.rate}
                  />
                  {item?.rating?.rate ? (
                    <span className="ant-rate-text">
                      {desc[item?.rating?.rate - 1]}
                    </span>
                  ) : (
                    ""
                  )}
                </div>
                <div className={style.wrap_productions_prices}>
                  <span className={style.productions_new_price}>
                    {item?.price}
                  </span>
                  <span className={style.productions_old_price}>
                    {item?.price - 10}
                  </span>
                  <span className={style.productions_price_discount}>34%</span>
                </div>
                <div className={style.wrap_productions_quality}>
                  <div className={style.wrap_productions_btn_quality}>
                    {count <= 1 ? (
                      <Button>-</Button>
                    ) : (
                      <Button onClick={() => setCount(count - 1)}>-</Button>
                    )}
                    <Input
                      className={style.productions_input_quality}
                      value={count}
                    />

                    <Button
                      onClick={() => setCount(count + 1)}
                      style={{ marginRight: "20px" }}
                    >
                      +
                    </Button>
                    <span className={style.qualyti}>
                      Quality: {item?.discount}
                    </span>
                  </div>
                </div>
                <div className={style.productions_btn}>
                  <Button
                    className={style.productions_btn_items}
                    type={"primary"}
                    danger
                    onClick={() => navigate("/cart")}
                  >
                    Mua Ngay
                  </Button>
                  <Button
                    className={style.productions_btn_items}
                    type={"primary"}
                    danger
                    onClick={() => handleAddCart(item)}
                  >
                    Add Cart
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className={style.wrap_profile_product}>
        <div className={style.wrap_profile_left}>
          <h3 className={style.sub_title_profile}>Mô tả sản phẩm</h3>
          <h2 className={style.title_product}>Thông số sản phẩm:</h2>
          <div className={style.table_profile}>
            <Table
              dataSource={dataSource}
              columns={columns}
              size="small"
              tableLayout="fixed"
            />
          </div>
        </div>
        <div className={style.wrap_profile_right}>
          <h1 className={style.title_profile_right}>Tin tức về sản phẩm</h1>
          <div className={style.news}>
            <div className={style.news_items}>
              <img className={style.img_news} src={hinh1} alt="" />
              <span>
                Top 7 thông tin đáng chú ý nhất tại buổi ra mắt Apple iPhone 15
              </span>
            </div>
            <div className={style.news_items}>
              <img className={style.img_news} src={hinh2} alt="" />
              <span>
                Microsoft Paint sắp sở hữu tính năng được dân Photoshop xài
                nhiều nhất: tách nền
              </span>
            </div>
            <div className={style.news_items}>
              <img className={style.img_news} src={hinh3} alt="" />
              <span>
                Trải nghiệm AMD RX 7700 XT - Card đồ họa tầm trung với 12 GB
                VRAM, chiến game AAA trên 100 fps ở FullHD
              </span>
            </div>
            <div className={style.news_items}>
              <img className={style.img_news} src={hinh4} alt="" />
              <span>
                HP sẽ chuyển địa điểm lắp ráp PC sang Việt Nam, Thái Lan, Mexico
              </span>
            </div>
            <div className={style.news_items}>
              <img className={style.img_news} src={hinh5} alt="" />
              <span>
                Card NVIDIA GeForce RTX 3090 SUPER Founders Edition bất ngờ lộ
                diện trên Taobao
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className={style.assess}></div>
      <div className={style.reviews}></div>
      {/* <RelatedProductions listRelatedItem={listRelatedItem} /> */}
    </div>
  );
};

export default Productions;
