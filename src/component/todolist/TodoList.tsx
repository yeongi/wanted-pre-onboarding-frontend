import { TodoInfo } from "../../type/todo";
import Todo from "./Todo";

type TodoProps = {
  lists: TodoInfo[];
  refreshHandler: () => void;
};

const TodoList = (props: TodoProps) => {
  return (
    <ul>
      {props.lists.length === 0 && <h1>리스트가 존재하지 않습니다.</h1>}
      {props.lists.length > 0 &&
        props.lists.map((list) => {
          return (
            <Todo
              key={list.id}
              refreshHandler={props.refreshHandler}
              todo={list}
            />
          );
        })}
    </ul>
  );
};

export default TodoList;
