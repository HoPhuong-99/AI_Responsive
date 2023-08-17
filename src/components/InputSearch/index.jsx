import { Input } from "antd";
import React from "react";
import style from "./style.module.css";

const { Search } = Input;

const InputSearch = () => {
  const handleSearch = (e) => {
    console.log(e.target.value);
  };

  return (
    <div className={style.container_inputSearch}>
      <Search
        placeholder="input search text"
        onChange={handleSearch}
        enterButton
      />
      <p className={style.list_itemSearch}>xin chao</p>
    </div>
  );
};

export default InputSearch;
