import { TodoInfo } from "../../type/todo";

const Todo = (props: TodoInfo) => {
  return (
    <li>
      <label>
        <input type="checkbox" />
        <span>{props.todo}</span>
      </label>
    </li>
  );
};

export default Todo;
