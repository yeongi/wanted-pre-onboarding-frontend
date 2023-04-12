import { deleteUserTodo, updateUserTodo } from "../../api/todo";
import { TodoInfo } from "../../type/todo";
import { useState } from "react";
import ModifyForm from "./ModifyForm";

type TodoProps = {
  todo: TodoInfo;
  refreshHandler: () => void;
};

const Todo = (props: TodoProps) => {
  const [modifyMode, setMode] = useState<boolean>(false);

  const openHandler = () => {
    setMode(true);
  };

  const closeHandler = () => {
    setMode(false);
  };

  const deleteTodoHandler = async (e: React.MouseEvent<HTMLButtonElement>) => {
    const deleteRes = await deleteUserTodo(props.todo.id);
    if (deleteRes?.ok) alert("성공적으로 삭제됐습니다.");
    props.refreshHandler();
  };

  const updateCheckedHandler = async (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const body = {
      ...props.todo,
      isCompleted: !props.todo.isCompleted,
    };

    await updateUserTodo(body);

    props.refreshHandler();
  };

  return (
    <li>
      {modifyMode && (
        <ModifyForm
          todo={props.todo}
          refreshHandler={props.refreshHandler}
          closeHandler={closeHandler}
        />
      )}
      {!modifyMode && (
        <label>
          <input
            type="checkbox"
            onChange={updateCheckedHandler}
            checked={props.todo.isCompleted}
          />
          <span>{props.todo.todo}</span>

          <button data-testid="modify-button" onClick={openHandler}>
            수정
          </button>

          <button data-testid="delete-button" onClick={deleteTodoHandler}>
            삭제
          </button>
        </label>
      )}
    </li>
  );
};

export default Todo;
