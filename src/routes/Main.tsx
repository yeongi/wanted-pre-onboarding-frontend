import React from "react";
import { useRouterTo } from "../lib/hooks/useRouterTo";

const Main: React.FC = () => {
  const { routerTo } = useRouterTo();

  return (
    <>
      <h1>메인페이지 입니다.</h1>
      <button
        onClick={() => {
          routerTo("/todo");
        }}
      >
        todolist
      </button>
      <button
        onClick={() => {
          routerTo("/signin");
        }}
      >
        signin
      </button>
      <button
        onClick={() => {
          routerTo("/signup");
        }}
      >
        signup
      </button>
    </>
  );
};

export default Main;
