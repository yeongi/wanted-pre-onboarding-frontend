import { deleteUserTodo } from "../../api/todo";
import { TodoInfo } from "../../type/todo";

type TodoProps = {
  todo: TodoInfo;
  refreshHandler: () => void;
};

const Todo = (props: TodoProps) => {
  const updateTodoHandler = async (
    e: React.MouseEvent<HTMLButtonElement>
  ) => {};

  const deleteTodoHandler = async (e: React.MouseEvent<HTMLButtonElement>) => {
    const deleteRes = await deleteUserTodo(props.todo.id);
    if (deleteRes?.ok) alert("성공적으로 삭제됐습니다.");
    props.refreshHandler();
  };

  return (
    <li>
      <label>
        <input type="checkbox" />
        <span>{props.todo.todo}</span>

        <button data-testid="modify-button" onClick={updateTodoHandler}>
          수정
        </button>
        <button data-testid="delete-button" onClick={deleteTodoHandler}>
          삭제
        </button>
      </label>
    </li>
  );
};

export default Todo;
