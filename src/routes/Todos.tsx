import React, { useEffect, useState } from "react";
import { getTodoList } from "../api/todo";
import TodoList from "../component/todolist/TodoList";
import { TodoInfo } from "../type/todo";

const Todos: React.FC = () => {
  const testTodoRequest = async () => {
    const res = await getTodoList();
    console.log("todo를 가져옴", res);
    setTodoList(res);
  };

  const [todoList, setTodoList] = useState<TodoInfo[]>([]);

  useEffect(() => {
    testTodoRequest();
  }, []);

  return (
    <div>
      <h1>투두리스트 페이지 입니다.</h1>
      <hr />
      <TodoList lists={todoList} />
    </div>
  );
};

export default Todos;
