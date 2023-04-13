import {
  createContext,
  useCallback,
  useState,
  useContext,
  useEffect,
} from "react";
import { getTodoList } from "../api/todo";
import {
  getUserTokenInLocalStorage,
  removeUserTokenInLocalStorage,
} from "../lib/utils/localTokenUtils";
import { TodoInfo } from "../type/todo";

type UserId = string | null;

export type TodoControlState = {
  userId: UserId;
  todoList: TodoInfo[];
  resetToDolistHandler: () => void;
  fetchTodoRequest: () => Promise<void>;
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
  const [userId, setUserId] = useState<UserId>(getUserTokenInLocalStorage());

  useEffect(() => {
    setUserId(getUserTokenInLocalStorage());
  });

  const fetchTodoRequest = useCallback(async () => {
    setUserId(getUserTokenInLocalStorage());

    if (!userId) return;
    const res: TodoInfo[] = await getTodoList();
    setTodoList(res);

    console.log("fetched ", userId, todoList);
  }, [userId]);

  const resetToDolistHandler = () => {
    removeUserTokenInLocalStorage();
    setTodoList([]);
    setUserId(null);
  };

  const todoControl: TodoControlState = {
    userId,
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
