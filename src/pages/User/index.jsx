import React, { useState } from "react";

import style from "./style.module.css";
import { Col, Tree } from "antd";
import { useEffect } from "react";
import InforUser from "../../components/User/InforUser";
import AddressUser from "../../components/User/AddressUser";
import Bank from "../../components/User/Bank";

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
      selectedComponent = <InforUser />;
      break;
    case "address":
      selectedComponent = <AddressUser />;
      break;
    case "bank":
      selectedComponent = <Bank />;
      break;
    default:
      selectedComponent = null;
  }

  return (
    <>
      <div>
        <Col span={24}>
          <Col span={10}>
            <Tree
              showIcon
              defaultExpandAll
              defaultSelectedKeys={["information"]}
              treeData={treeData}
              onSelect={handleNodeSelect}
            />
          </Col>

          <Col span={14}>{selectedComponent}</Col>
        </Col>
      </div>
    </>
  );
};

export default User;
