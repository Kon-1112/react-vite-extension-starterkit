import React from "react";
import ReactDOM from "react-dom/client";
import "../../global.scss";
import { moveOptions, moveWelcome } from "@/utils/locationUtil";
import AppTitle from "@/components/atoms/AppTitle";

document.body.appendChild(document.createElement("div"));
const appContainer: HTMLElement | null = document.querySelector("div");
const root: ReactDOM.Root = ReactDOM.createRoot(appContainer!);

root.render(
  <React.Fragment>
    <div className="bg-orange-400 p-2">
      <AppTitle />
      <h1 className="text-white">
        この画面はダッシュボード画面です
      </h1>
      <button className="bg-green-400 mt-2" onClick={moveOptions}>
        設定に移動する
      </button>
      <button className="bg-sky-400 mt-2" onClick={moveWelcome}>
        ウェルカムページに移動する
      </button>
    </div>
  </React.Fragment>,
);
