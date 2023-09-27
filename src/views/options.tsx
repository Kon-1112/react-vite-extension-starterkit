import React from "react";
import * as ReactDOM from "react-dom/client";
import "../../index.scss";
import {moveDashboard, moveWelcome} from "../utils/locationUtils";

const rootElement: HTMLElement | null = document.getElementById("root");

if (rootElement == null) {
  throw new Error("rootが見つかりません");
}

const root: ReactDOM.Root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <div className='bg-red-600 p-2'>
      <h1 className='text-white'>このページは設定画面です</h1>
      <h1 className='text-lime-100'>this is options page</h1>
      <button className='bg-green-500 mt-2' onClick={moveDashboard}>ダッシュボードに移動する</button>
      <button className='bg-sky-400 mt-2' onClick={moveWelcome}>ウェルカムページに移動する</button>
    </div>
  </React.StrictMode>,
);
