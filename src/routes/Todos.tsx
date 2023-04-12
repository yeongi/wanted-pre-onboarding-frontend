import React, { useEffect, useState, useCallback } from "react";
import { getTodoList } from "../api/todo";
import TodoList from "../component/todolist/TodoList";
import { TodoInfo } from "../type/todo";
import AddTodoForm from "../component/todolist/AddTodoForm";

const Todos: React.FC = () => {
  const fetchTodoRequest = useCallback(async () => {
    const res = await getTodoList();
    setTodoList(res);
  }, []);

  const [todoList, setTodoList] = useState<TodoInfo[]>([]);

  useEffect(() => {
    fetchTodoRequest();
  }, []);

  return (
    <div>
      <h1>투두리스트 페이지 입니다.</h1>
      <hr />
      <AddTodoForm refreshHandler={fetchTodoRequest} />
      <TodoList lists={todoList} refreshHandler={fetchTodoRequest} />
    </div>
  );
};

export default Todos;
