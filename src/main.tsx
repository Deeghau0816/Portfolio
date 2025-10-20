import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { HashRouter } from "react-router-dom";
import "./index.css";

console.log("[Portfolio] bootstrapping");

const el = document.getElementById("root");
if (!el) {
  console.error("[Portfolio] #root not found in index.html");
} else {
  ReactDOM.createRoot(el).render(
    <React.StrictMode>
      <HashRouter>
        <App />
      </HashRouter>
    </React.StrictMode>
  );
}
