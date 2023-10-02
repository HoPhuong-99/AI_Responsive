import React from "react";

import style from "./style.module.css";
import { Button, Input } from "antd";
import { MailOutlined } from "@ant-design/icons";

const Footer = () => {
  return (
    <>
      <div className={style.Footer}>
        <div className={style.content_Subcribe}>
          <div className={style.container_SendMail}>
            <p className={style.title}>
              Subscribe on our newsletter
              <span>
                Get daily news on upcoming offers from many suppliers all over
                the world
              </span>
            </p>
            <div className={style.sendMail}>
              <Input
                size="large"
                placeholder="Email"
                prefix={<MailOutlined />}
              />
              <Button type="primary">Send Mail</Button>
            </div>
          </div>
        </div>
        <div className={style.content_Footer}>
          <div className={style.wrap_footer}>
            <div className={style.container}>
              <div className={style.wrap_left_footer}>
                <div>Logo</div>
                <span>Decoration</span>
                <div className={style.wrap_social}>
                  <span>social</span>
                  <span>social</span>
                  <span>social</span>
                  <span>social</span>
                </div>
              </div>
              <div className={style.wrap_right_footer}>
                <ul className={style.wrap_link}>
                  <li className={style.link_items_fist}>About</li>
                  <li className={style.link_items}>About us</li>
                  <li className={style.link_items}>About us</li>
                  <li className={style.link_items}>About us</li>
                  <li className={style.link_items}>About us</li>
                </ul>
                <ul className={style.wrap_link}>
                  <li className={style.link_items_fist}>About</li>
                  <li className={style.link_items}>About us</li>
                  <li className={style.link_items}>About us</li>
                  <li className={style.link_items}>About us</li>
                  <li className={style.link_items}>About us</li>
                </ul>
                <ul className={style.wrap_link}>
                  <li className={style.link_items_fist}>About</li>
                  <li className={style.link_items}>About us</li>
                  <li className={style.link_items}>About us</li>
                  <li className={style.link_items}>About us</li>
                  <li className={style.link_items}>About us</li>
                </ul>
                <ul className={style.wrap_link}>
                  <li className={style.link_items_fist}>About</li>
                  <li className={style.link_items}>About us</li>
                  <li className={style.link_items}>About us</li>
                  <li className={style.link_items}>About us</li>
                  <li className={style.link_items}>About us</li>
                </ul>
                <ul className={style.wrap_link}>
                  <li className={style.link_items_fist}>About</li>
                  <li className={style.link_items}>About us</li>
                  <li className={style.link_items}>About us</li>
                  <li className={style.link_items}>About us</li>
                  <li className={style.link_items}>About us</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className={style.copyright}>
          <div className={style.copyright_items}>@ 2023 NextIt</div>
        </div>
      </div>
    </>
  );
};

export default Footer;
