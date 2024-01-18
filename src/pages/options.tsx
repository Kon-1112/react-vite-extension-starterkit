import React from "react";
import * as ReactDOM from "react-dom/client";
import "../../index.scss";
import { moveDashboard, moveWelcome } from "../utils/locationUtil";
import { getEnv } from "../utils/envUtil";
import { APP_DESCRIPTION, APP_NAME } from "../constants/env";

document.body.appendChild(document.createElement("div"));
const appContainer: HTMLElement | null = document.querySelector("div");
const root: ReactDOM.Root = ReactDOM.createRoot(appContainer!);

root.render(
  <React.StrictMode>
    <div className="bg-red-600 p-2">
      <h1>{getEnv(APP_NAME)}</h1>
      <h1>{getEnv(APP_DESCRIPTION)}</h1>
      <hr />
      <h1 className="text-white">このページは設定画面です</h1>
      <button className="bg-green-500 mt-2" onClick={moveDashboard}>
        ダッシュボードに移動する
      </button>
      <button className="bg-sky-400 mt-2" onClick={moveWelcome}>
        ウェルカムページに移動する
      </button>
    </div>
  </React.StrictMode>,
);
