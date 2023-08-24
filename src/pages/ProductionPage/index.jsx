import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Rate, Button, Input } from "antd";
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
import lap from "../../assests/swiper/lap.png";
import lap1 from "../../assests/swiper/lap1.png";
import lap2 from "../../assests/swiper/lap2.png";
import lap3 from "../../assests/swiper/lap3.png";
import lap4 from "../../assests/swiper/lap4.png";
import lap5 from "../../assests/swiper/lap5.png";
import lap6 from "../../assests/swiper/lap6.png";
import RelatedProductions from "../../components/Product/RelatedProduct";
const desc = ["terrible", "bad", "normal", "good", "wonderful"];

const Productions = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();
  const idLaptop = parseInt(id);
  const [listData, setListData] = useState();
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const [value, setValue] = useState(3);
  const [count, setCount] = useState(1);

  let inforLaptop = listData?.filter((item) => item?.id === idLaptop);
  let listRelatedItem = listData?.filter(
    (item) => item?.category === inforLaptop[0].category
  );

  let listCart = useSelector((state) => state.cartSlice.listCart);

  const fetchData = async () => {
    try {
      const result = await APIService.get_ListData();
      setListData(result);
    } catch (error) {}
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleAddCart = (item) => {
    const addItem = listCart.find((prevItem) => prevItem?.id === item?.id);

    if (addItem) {
      const updatedList = listCart.map((prevItem) =>
        prevItem.id === item.id
          ? { ...prevItem, quantily: prevItem.quantily + count }
          : prevItem
      );
      dispatch(itemListCart(updatedList));
    } else {
      dispatch(itemListCart([...listCart, { ...item, quantily: count }]));
    }
  };

  const listImg = [
    {
      img: lap,
      url: "",
    },
    {
      img: lap1,
      url: "",
    },
    {
      img: lap2,
      url: "",
    },
    {
      img: lap3,
      url: "",
    },

    {
      img: lap4,
      url: "",
    },
    {
      img: lap5,
      url: "",
    },
    {
      img: lap6,
      url: "",
    },
  ];

  return (
    <>
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
            {e?.title}
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
                <img className={style.productions_img} src={e?.image} url="" />
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
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className={style.product_right}>
          {inforLaptop?.map((item, key) => (
            <div className={style.productions_items} key={key}>
              <div className={style.productions_items_right}>
                <h1 className={style.title_productions}>{item?.title}</h1>
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
                      Quality: {item?.rating?.count}
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
      <RelatedProductions listRelatedItem={listRelatedItem} />
    </>
  );
};

export default Productions;
