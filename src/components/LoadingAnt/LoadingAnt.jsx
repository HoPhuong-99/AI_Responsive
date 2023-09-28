import { Space, Spin } from "antd";
import React from "react";

const LoadingAnt = ({ height }) => {
  return (
    <Space
      direction="vertical"
      style={{
        height: `${height ? height : "calc(100vh - 140px)"} `,
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Spin
        style={{ display: "flex", justifyContent: "center" }}
        tip=""
        size="large"
      ></Spin>
    </Space>
  );
};

export default LoadingAnt;
