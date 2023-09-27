import React from "react";
import * as ReactDOM from "react-dom/client";
import "../../index.scss";
import {validateRootElement} from "../utils/validateUtils";
import {moveDashboard, moveOptions, moveWelcome} from "../utils/locationUtils";

const root: ReactDOM.Root = ReactDOM.createRoot(
  validateRootElement(
    document.getElementById("root")
  )
);

root.render(
  <React.StrictMode>
    <div className='bg-blue-600 w-52 p-2'>
      <h1 className="text-white">この画面はポップアップです</h1>
      <h1 className="text-lime-100">this is popup page</h1>
      <button className='bg-green-500 mt-2' onClick={moveDashboard}>ダッシュボードに移動する</button>
      <button className='bg-orange-400 mt-2' onClick={moveOptions}>設定に移動する</button>
      <button className='bg-sky-400 mt-2' onClick={moveWelcome}>ウェルカムページに移動する</button>
    </div>
  </React.StrictMode>,
);
