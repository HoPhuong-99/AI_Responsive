import React, { useState } from "react";
import { Button, Checkbox, Form, Input } from "antd";

import style from "./style.module.css";

const Login = (props) => {
  const { setCheckRegister, checkRegister } = props;
  const [form] = Form.useForm();
  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const handleLogin = () => {
    const username = form.getFieldValue("username");
    const password = form.getFieldValue("password");

    const data = {
      username: username,
      password: password,
    };
  };

  return (
    <div className={style.container}>
      <div className={style.wrap_login}>
        <div className={style.wrap_title_login}>
          <h1 className={style.title_login}>ĐĂNG NHẬP </h1>
        </div>
        <div className={style.wrap_input_login}>
          <Form
            className={style.wrap_form}
            name="basic"
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
            labelCol={{ span: 5 }}
            wrapperCol={{ span: 20 }}
            form={form}
          >
            <Form.Item
              label="Username"
              name="username"
              rules={[
                {
                  required: true,
                  message: "Please input your username!",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
                },
                {
                  validator: (rule, value) => {
                    if (!value || value.length >= 8) {
                      return Promise.resolve();
                    }
                    return Promise.reject(
                      "Password must be at least 8 characters long."
                    );
                  },
                },
              ]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item
              className={style.check}
              name="remember"
              valuePropName="checked"
              wrapperCol={{
                offset: 16,
                span: 16,
              }}
            >
              <Checkbox>Remember me</Checkbox>
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
                onClick={handleLogin()}
              >
                Login
              </Button>
            </Form.Item>
          </Form>
        </div>
        <div className={style.register}>
          <span>Bạn chưa có tài khoản?</span>
          <span
            className={style.link_register}
            onClick={() => setCheckRegister(true)}
          >
            Đăng ký ngay!
          </span>
        </div>
      </div>
    </div>
  );
};

export default Login;
