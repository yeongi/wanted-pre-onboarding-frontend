import BASE_URL from "../lib/const/BASE_URL";
import { UserInfo } from "../type/user";

const postFetch = (url: string, body: UserInfo) => {
  return fetch(`${BASE_URL}${url}`, {
    headers: {
      "Content-Type": "application/json",
      cors: "no-cors",
    },
    method: "POST",
    body: JSON.stringify(body),
  });
};

export const userSignInPost = (userinfo: UserInfo) =>
  postFetch("/auth/signin", userinfo);

export const userSignUpPost = (userinfo: UserInfo) =>
  postFetch("/auth/signup", userinfo);
