import React, { useEffect } from "react";
import {
  deleteUserTodo,
  getTodoList,
  postUserTodo,
  updateUserTodo,
} from "../api/todo";

const Todos: React.FC = () => {
  // const testTodoRequest = async () => {
  //   const res = await getTodoList();
  //   console.log("todo를 가져옴", res);

  //   const createTodo = await postUserTodo("테스트");

  //   console.log("할일 post  ", createTodo);
  // };

  const testTodoRequest = async () => {
    const res = await updateUserTodo(3, "테스트지롱", true);
    console.log("todo를 수정함", res);

    const deleteTodo = await deleteUserTodo(4);

    console.log("todo를 삭제함", deleteTodo);
  };

  useEffect(() => {
    testTodoRequest();
  }, []);

  return <h1>투두리스트 페이지 입니다.</h1>;
};

export default Todos;
