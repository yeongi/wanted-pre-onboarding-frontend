import { postUserTodo } from "../../api/todo";
import { useTodosState } from "../../store/TodosContext";

const AddTodoForm = () => {
  const { fetchTodoRequest } = useTodosState();

  const todoSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const myStr = formData.get("myTodo") as string;

    if (!myStr) return;

    e.currentTarget.reset();

    await postUserTodo(myStr);

    fetchTodoRequest();
  };

  return (
    <form onSubmit={todoSubmitHandler}>
      <label>
        할 일 작성 :
        <input name="myTodo" type="text" data-testid="new-todo-input" />
      </label>

      <button type="submit" data-testid="new-todo-add-button">
        추가
      </button>
    </form>
  );
};

export default AddTodoForm;
