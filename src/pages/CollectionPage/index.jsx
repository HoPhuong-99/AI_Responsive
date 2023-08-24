import React, { useEffect } from "react";

import style from "./style.module.css";
import { AllProduction } from "../../components/AllProduction";
import SortMenu from "../../components/SortMenu";

const Collections = () => {
  return (
    <div className={style.all_Productions}>
      <AllProduction />
    </div>
  );
};

export default Collections;
