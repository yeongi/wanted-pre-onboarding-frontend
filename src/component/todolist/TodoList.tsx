import { TodoInfo } from "../../type/todo";
import Todo from "./Todo";

type TodoProps = {
  lists: TodoInfo[];
};

const TodoList = (props: TodoProps) => {
  return (
    <ol>
      {props.lists.map((list) => {
        return (
          <Todo
            key={list.id}
            id={list.id}
            userId={list.userId}
            todo={list.todo}
            isCompleted={list.isCompleted}
          />
        );
      })}
    </ol>
  );
};

export default TodoList;
