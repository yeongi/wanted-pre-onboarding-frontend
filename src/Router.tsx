import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Main from "./routes/Main";
import SignIn from "./routes/SignIn";
import SignUp from "./routes/SignUp";
import Todos from "./routes/Todos";
import Error from "./routes/Error";
import AuthLayout from "./component/AuthLayout";

interface routeElement {
  path: string;
  element: React.ReactNode;
  withAuth: boolean;
  redirectPath?: string;
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
    redirectPath: "/todo",
  },
  {
    path: "/signup",
    element: <SignUp />,
    withAuth: false,
    redirectPath: "/todo",
  },
  {
    path: "/todo",
    element: <Todos />,
    withAuth: true,
    redirectPath: "/signin",
  },
];

const router = createBrowserRouter(
  RouteElements.map((route) => {
    if (route.redirectPath) {
      return {
        path: route.path,
        element: (
          <AuthLayout to={route.redirectPath} withAuth={route.withAuth}>
            {route.element}
          </AuthLayout>
        ),
        errorElement: <Error />,
      };
    }

    return {
      path: route.path,
      element: route.element,
      errorElement: <Error />,
    };
  })
);

export default router;
