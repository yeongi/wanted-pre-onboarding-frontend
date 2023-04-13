import React from "react";
import TodoList from "../component/todolist/TodoList";
import AddTodoForm from "../component/todolist/AddTodoForm";

const Todos: React.FC = () => {
  return (
    <div>
      <h1>투두리스트 페이지 입니다.</h1>
      <hr />
      <AddTodoForm />
      <TodoList />
    </div>
  );
};

export default Todos;
