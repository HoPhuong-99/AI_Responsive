import React, { useState } from "react";
import { Button, Checkbox, Form, Input } from "antd";

import style from "./style.module.css";
import { useForm } from "antd/es/form/Form";
import { APIService } from "../../services/apiService";

const Register = (props) => {
  const { setCheckRegister } = props;
  const [form] = Form.useForm();

  const Register = (values) => {
    APIService.RegisterUSer({
      name: form.getFieldValue("nickname"),
      email: form.getFieldValue("email"),
      password: form.getFieldValue("password"),
      roleId: 1,
    })
      .then((response) => {
        console.log(response.status);
        if (response.status === 200) {
          alert("Successfully");
        }
      })
      .catch((error) => {
        alert("The email has already been taken");
      });
  };
  const RegisterFail = (errorInfo) => {
    console.log("Failed:", errorInfo);
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
