import { updateUserTodo } from "../../api/todo";
import { ModifyInfo, TodoInfo } from "../../type/todo";

type ModifyProps = {
  todo: TodoInfo;
  refreshHandler: () => void;
  closeHandler: () => void;
};

const ModifyForm = (props: ModifyProps) => {
  const todoSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const myStr = formData.get("myTodo") as string;

    const info: ModifyInfo = {
      id: props.todo.id,
      todo: myStr,
      isCompleted: props.todo.isCompleted,
    };

    if (!myStr) return;

    await updateUserTodo(info);

    props.refreshHandler();
    props.closeHandler();
  };

  return (
    <form onSubmit={todoSubmitHandler}>
      <label>
        수정할 작성 :
        <input name="myTodo" type="text" data-testid="modify-input" />
      </label>

      <button data-testid="submit-button">제출</button>

      <button data-testid="cancel-button" onClick={props.closeHandler}>
        취소
      </button>
    </form>
  );
};

export default ModifyForm;
