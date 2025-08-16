import App from "#app/App";
import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./shared/libs/reportWebVitals";
import "./shared/styles/index.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

reportWebVitals();
