import React from "react";
import {getEnv} from "@/utils/envUtil";
import {APP_NAME} from "@/constants/env";

const AppTitle = () => {
  return (
    <div className="flex items-center">
      <h1
        className="text-5xl font-bold text-white"
      >{getEnv(APP_NAME)}
      </h1>
    </div>
  )
}

export default AppTitle;
