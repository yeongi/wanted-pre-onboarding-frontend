import React from "react";
import { useRouterTo } from "../lib/hooks/useRouterTo";
import { useTodosState } from "../store/TodosContext";

const Main: React.FC = () => {
  const { routerTo } = useRouterTo();
  const control = useTodosState();

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
      <button
        onClick={() => {
          control.resetToDolistHandler();
          alert("로그아웃 됐습니다.");
        }}
      >
        signout
      </button>
    </>
  );
};

export default Main;
