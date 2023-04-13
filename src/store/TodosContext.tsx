import { createContext, useState, useContext, useCallback } from "react";
import { getTodoList } from "../api/todo";
import { removeUserTokenInLocalStorage } from "../lib/utils/localTokenUtils";
import { TodoInfo } from "../type/todo";

export type TodoControlState = {
  todoList: TodoInfo[];
  resetToDolistHandler: () => void;
  fetchTodoRequest: (token?: string | null) => Promise<void>;
};

const TodosStateContext = createContext<TodoControlState | undefined>(
  undefined
);

export function TodosContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [todoList, setTodoList] = useState<TodoInfo[]>([]);

  const fetchTodoRequest = useCallback(async () => {
    const res: TodoInfo[] = await getTodoList();
    setTodoList(res);
  }, []);

  const resetToDolistHandler = () => {
    removeUserTokenInLocalStorage();
    setTodoList([]);
  };

  const todoControl: TodoControlState = {
    todoList,
    resetToDolistHandler,
    fetchTodoRequest,
  };

  return (
    <TodosStateContext.Provider value={todoControl}>
      {children}
    </TodosStateContext.Provider>
  );
}

export function useTodosState() {
  const state = useContext(TodosStateContext);
  if (!state) throw new Error("TodosProvider not found");
  return state;
}
