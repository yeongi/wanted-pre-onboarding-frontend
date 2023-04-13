// import { TodoInfo } from "../../type/todo";
import { useEffect } from "react";
import Todo from "./Todo";
import { useTodosState } from "../../store/TodosContext";

const TodoList = () => {
  const { todoList, fetchTodoRequest } = useTodosState();

  useEffect(() => {
    fetchTodoRequest();
  }, [fetchTodoRequest]);

  return (
    <ul>
      {todoList.length === 0 && <h1>리스트가 존재하지 않습니다.</h1>}
      {todoList.length > 0 &&
        todoList.map((list) => {
          return (
            <Todo key={list.id} refreshHandler={fetchTodoRequest} todo={list} />
          );
        })}
    </ul>
  );
};

export default TodoList;
