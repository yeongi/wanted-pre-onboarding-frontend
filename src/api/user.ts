import BASE_URL from "../lib/base/BASE_URL";
import { userInfo } from "../type/user";

export const userSignInPost = (body: userInfo) => {
  return fetch(`${BASE_URL}/auth/signin`, {
    headers: {
      "Content-Type": "application/json",
    },
    method: "post",
    body: JSON.stringify(body),
  });
};

export const userSignUpPost = (body: userInfo) => {
  return fetch(`${BASE_URL}/auth/signup`, {
    headers: {
      "Content-Type": "application/json",
    },
    method: "post",
    body: JSON.stringify(body),
  });
};
