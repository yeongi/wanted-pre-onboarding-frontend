import { TodoInfo } from "../../type/todo";

const Todo = (props: TodoInfo) => {
  const deleteTodo;

  return (
    <li>
      <label>
        <input type="checkbox" />
        <span>{props.todo}</span>

        <button onClick={} data-testid="delete-button">
          삭제
        </button>
      </label>
    </li>
  );
};

export default Todo;
