import BASE_URL from "../lib/const/BASE_URL";
import { getUserTokenInLocalStorage } from "../lib/utils/localTokenUtils";
import { ModifyInfo } from "../type/todo";

const headerWithToken = {
  "Content-Type": "application/json",
  Authorization: `Bearer ${getUserTokenInLocalStorage()}`,
  credentials: "include",
};

// export const getTodoList = async () => {
//   console.log(headerWithToken);
//   const res = await fetch(`${BASE_URL}/todos`, {
//     headers: headerWithToken,
//     method: "GET",
//   });

//   return res ? res.json() : null;
// };

export const getTodoList = async (token = getUserTokenInLocalStorage()) => {
  const res = await fetch(`${BASE_URL}/todos`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
      credentials: "include",
    },
    method: "GET",
  });

  return res ? res.json() : null;
};

export const postUserTodo = async (todo: string) => {
  const res = await fetch(`${BASE_URL}/todos`, {
    headers: headerWithToken,
    method: "POST",
    body: JSON.stringify({ todo }),
  });

  return res ? res.json() : null;
};

export const updateUserTodo = async (info: ModifyInfo) => {
  const res = await fetch(`${BASE_URL}/todos/${info.id}`, {
    headers: headerWithToken,
    method: "put",
    body: JSON.stringify({ todo: info.todo, isCompleted: info.isCompleted }),
  });

  return res ? res.json() : null;
};

export const deleteUserTodo = async (todoId: number) => {
  const res = await fetch(`${BASE_URL}/todos/${todoId}`, {
    headers: headerWithToken,
    method: "delete",
  });

  return res ? res : null;
};
