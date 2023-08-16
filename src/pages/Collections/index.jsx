import React, { useEffect } from "react";

import style from "./style.module.css";
import { AllProduction } from "../../components/AllProduction";
import SortMenu from "../../components/SortMenu";

const Collections = () => {
  return (
    <div>
      <div className={style.all_Productions}>
        <p>xem tất cả</p>
        <AllProduction />
      </div>
    </div>
  );
};

export default Collections;
