import { postUserTodo } from "../../api/todo";

type RefresProps = { refreshHandler: () => void };

const AddTodoForm = (props: RefresProps) => {
  const todoSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const myStr = formData.get("myTodo") as string;
    if (!myStr) return;
    const postRes = await postUserTodo(myStr);

    console.log(postRes);

    props.refreshHandler();
    formData.set("myTodo", "");
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
