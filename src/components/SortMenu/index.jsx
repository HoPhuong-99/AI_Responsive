import React, { useEffect, useState } from "react";
import { Button, Dropdown, Menu } from "antd";
import { DownOutlined } from "@ant-design/icons";

const SortMenu = (props) => {
  const { listData, setListData } = props;
  const [originalListData, setOriginalListData] = useState([]);
  const [sortOrder, setSortOrder] = useState("all");

  useEffect(() => {
    setOriginalListData(listData);
  }, [listData]);

  const handleSort = (key) => {
    let sorted;

    if (key === "ascend") {
      sorted = [...listData];
      sorted.sort((a, b) => {
        const nameA = a.title.toLowerCase();
        const nameB = b.title.toLowerCase();
        return nameA.localeCompare(nameB);
      });
      setSortOrder("ascend");
    } else if (key === "descend") {
      sorted = [...listData];
      sorted.sort((a, b) => {
        const nameA = a.title.toLowerCase();
        const nameB = b.title.toLowerCase();
        return nameB.localeCompare(nameA);
      });
      setSortOrder("descend");
    } else if (key === "lowToHigh") {
      sorted = [...listData];
      sorted.sort((a, b) => a.price - b.price);
      setSortOrder("lowToHigh");
    } else if (key === "highToLow") {
      sorted = [...listData];
      sorted.sort((a, b) => b.price - a.price);
      setSortOrder("highToLow");
    } else if (key === "all") {
      setSortOrder("all");
      return;
    }

    if (key === " all") {
      setListData(originalListData);
    } else {
      setListData(sorted);
    }
  };

  const sortMenu = (
    <Menu onClick={(e) => handleSort(e.key)}>
      <Menu.Item key="ascend">A -{">"} Z</Menu.Item>
      <Menu.Item key="descend">Z -{">"} A</Menu.Item>
      <Menu.Item key="lowToHigh">lowToHigh</Menu.Item>
      <Menu.Item key="highToLow">highToLow</Menu.Item>
    </Menu>
  );

  return (
    <div>
      <Dropdown overlay={sortMenu} trigger={["click"]}>
        <Button>
          {sortOrder === "ascend"
            ? "A-Z"
            : sortOrder === "descend"
            ? "Z-A"
            : sortOrder === "lowToHigh"
            ? "Low to high"
            : sortOrder === "highToLow"
            ? "High to low"
            : "All"}
          <DownOutlined />
        </Button>
      </Dropdown>
    </div>
  );
};

export default SortMenu;
