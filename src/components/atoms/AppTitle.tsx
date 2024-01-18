import React from "react";
import {getEnv} from "../../utils/envUtil";
import {APP_NAME} from "../../constants/env";

const AppTitle = () => {
  return (
    <div className="app-title">
      <h1>{getEnv(APP_NAME)}</h1>
    </div>
  )
}

export default AppTitle;
