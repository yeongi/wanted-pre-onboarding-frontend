import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const rootNode = document.getElementById("root");

if (!rootNode) throw new Error("Failed to find the root element");

const root = ReactDOM.createRoot(rootNode);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
