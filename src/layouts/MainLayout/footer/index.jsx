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
          
        </div>
      </div>
    </>
  );
};

export default Footer;
