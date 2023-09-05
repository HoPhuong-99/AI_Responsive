import React, { useState } from "react";
import { Button, Checkbox, Form, Input } from "antd";

import style from "./style.module.css";
import { useForm } from "antd/es/form/Form";

const Register = (props) => {
  const { setCheckRegister } = props;
  const [form] = Form.useForm();

  const Register = (values) => {
    console.log("Success:", values);
  };
  const RegisterFail = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const handleRegister = () => {
    const email = form.getFieldValue("email");
    const password = form.getFieldValue("password");
    const confirm = form.getFieldValue("confirm");
    const nickname = form.getFieldValue("nickname");
    const phone = form.getFieldValue("phone");
    const address = form.getFieldValue("address");

    const data = {
      email: email,
      password: password,
      confirm: confirm,
      nickname: nickname,
      phone: phone,
      address: address,
    };
  };

  return (
    <div className={style.container}>
      <div className={style.wrap_login}>
        <div className={style.wrap_title_login}>
          <h1 className={style.title_login}>ĐĂNG KÝ TÀI KHOẢN </h1>
        </div>
        <div className={style.wrap_input_login}>
          <Form
            className={style.wrap_form}
            name="basic"
            initialValues={{
              remember: true,
            }}
            onFinish={Register}
            onFinishFailed={RegisterFail}
            autoComplete="off"
            labelCol={{ span: 7 }}
            wrapperCol={{ span: 20 }}
            form={form}
          >
            <Form.Item
              name="email"
              label="E-mail"
              rules={[
                {
                  type: "email",
                  message: "The input is not valid E-mail!",
                },
                {
                  required: true,
                  message: "Please input your E-mail!",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              name="password"
              label="Password"
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
                },
              ]}
              hasFeedback
            >
              <Input.Password />
            </Form.Item>

            <Form.Item
              name="confirm"
              label="Confirm Password"
              dependencies={["password"]}
              hasFeedback
              rules={[
                {
                  required: true,
                  message: "Please confirm your password!",
                },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue("password") === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(
                      new Error(
                        "The new password that you entered do not match!"
                      )
                    );
                  },
                }),
              ]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item
              name="nickname"
              label="Nickname"
              rules={[
                {
                  required: true,
                  message: "Please input your nickname!",
                  whitespace: true,
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="address"
              label="Address"
              rules={[
                {
                  required: true,
                  message: "Please input your address!",
                  whitespace: true,
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              wrapperCol={{
                offset: 6,
                span: 12,
              }}
            >
              <Button
                type="primary"
                htmlType="submit"
                className={style.btn_login}
                onClick={handleRegister()}
              >
                Register
              </Button>
            </Form.Item>
          </Form>
        </div>
        <div className={style.register}>
          <span>Bạn đã có tài khoản?</span>
          <span
            className={style.link_register}
            onClick={() => setCheckRegister(false)}
          >
            Đăng nhập!
          </span>
        </div>
      </div>
    </div>
  );
};

export default Register;
