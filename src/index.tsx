import React from "react";
import ReactDOM from "react-dom/client";
import router from "./Router";
import { RouterProvider } from "react-router-dom";
import { TodosContextProvider } from "./store/TodosContext";

const rootNode = document.getElementById("root");

if (!rootNode) throw new Error("Failed to find the root element");

const root = ReactDOM.createRoot(rootNode);
root.render(
  <React.StrictMode>
    <TodosContextProvider>
      <RouterProvider router={router} />
    </TodosContextProvider>
  </React.StrictMode>
);
