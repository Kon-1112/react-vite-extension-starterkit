import React from "react";
import * as ReactDOM from "react-dom/client";
import "../../index.scss";

const root: HTMLDivElement = document.createElement("div");
root.id = "crx-root";
document.body.appendChild(root);

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <h1>CONTENT</h1>
  </React.StrictMode>,
);
