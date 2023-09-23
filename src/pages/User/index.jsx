import React from "react";

import style from "./style.module.css";
import { Tree } from "antd";

const treeData = [
  {
    title: "Thông tin người dùng",
    key: "inforUser",
    children: [
      {
        title: "Hồ sơ",
        key: "information",
        onclick: () => console.log(1),
      },
      {
        title: "Địa chỉ",
        key: "address",
        onclick: () => console.log(2),
      },
      {
        title: "Liên kết ngân hàng",
        key: "bank",
        onclick: () => console.log(3),
      },
    ],
  },
];

const User = () => {
  return (
    <>
      <Tree
        showIcon
        defaultExpandAll
        defaultSelectedKeys={["information"]}
        treeData={treeData}
      />
    </>
  );
};

export default User;
