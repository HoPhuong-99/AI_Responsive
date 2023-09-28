import React, { useState } from "react";

import style from "./style.module.css";
import { Tree } from "antd";
import { useEffect } from "react";

const treeData = [
  {
    title: "Thông tin người dùng",
    key: "inforUser",
    children: [
      {
        title: "Hồ sơ",
        key: "information",
      },
      {
        title: "Địa chỉ",
        key: "address",
      },
      {
        title: "Liên kết ngân hàng",
        key: "bank",
      },
    ],
  },
];

const User = () => {
  const [keyTree, setKeyTree] = useState("information");

  const handleNodeSelect = (selectedKeys, info) => {
    if (info !== "") {
      setKeyTree(info.node.key);
    }
  };

  useEffect(() => {
    console.log(keyTree);
  }, [keyTree]);

  let selectedComponent;
  switch (keyTree) {
    case "information":
      selectedComponent = "hika";
      break;
    case "address":
      selectedComponent = "hophuong";
      break;
    case "bank":
      selectedComponent = "y nhi";
      break;
    default:
      selectedComponent = null;
  }

  return (
    <>
      <div>
        <Tree
          showIcon
          defaultExpandAll
          defaultSelectedKeys={["information"]}
          treeData={treeData}
          onSelect={handleNodeSelect}
        />
        {selectedComponent}
      </div>
    </>
  );
};

export default User;
