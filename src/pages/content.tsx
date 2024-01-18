import React from "react";
import ReactDOM from "react-dom/client";

const root: HTMLDivElement = document.createElement("div");
root.id = "extension-root";
document.body.appendChild(root);

ReactDOM.createRoot(root)
  .render(
    <React.Fragment>
      <h1>CONTENT</h1>
    </React.Fragment>
  );
