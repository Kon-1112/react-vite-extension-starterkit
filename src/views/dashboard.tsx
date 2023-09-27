import React from "react";
import * as ReactDOM from "react-dom/client";
import "../../index.scss";
import {moveOptions, moveWelcome} from "../utils/locationUtils";
import {validateRootElement} from "../utils/validateUtils";

const root: ReactDOM.Root = ReactDOM.createRoot(
  validateRootElement(
    document.getElementById("root")
  )
);

root.render(
  <React.StrictMode>
    <div className='bg-orange-400 p-2'>
      <h1 className='text-white'>この画面はダッシュボード画面です</h1>
      <h1 className='text-lime-100'>this is dashboard page</h1>
      <button className='bg-green-400 mt-2' onClick={moveOptions}>設定に移動する</button>
      <button className='bg-sky-400 mt-2' onClick={moveWelcome}>ウェルカムページに移動する</button>
    </div>
  </React.StrictMode>,
);
