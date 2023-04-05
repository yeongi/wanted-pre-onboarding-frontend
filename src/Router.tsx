import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Main from "./routes/Main";
import SignIn from "./routes/SignIn";
import SignUp from "./routes/SignUp";
import Todos from "./routes/Todos";
import Error from "./routes/Error";

interface routeElement {
  path: string;
  element: JSX.Element;
  withAuth: boolean;
}

const RouteElements: routeElement[] = [
  {
    path: "/",
    element: <Main />,
    withAuth: false,
  },
  {
    path: "/signin",
    element: <SignIn />,
    withAuth: false,
  },
  {
    path: "/signup",
    element: <SignUp />,
    withAuth: false,
  },
  {
    path: "/todos",
    element: <Todos />,
    withAuth: false,
  },
];

const router = createBrowserRouter(
  RouteElements.map((route) => {
    return {
      path: route.path,
      element: route.element,
      errorElement: <Error />,
    };
  })
);

export default router;
