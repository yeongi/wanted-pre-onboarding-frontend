import BASE_URL from "../lib/const/BASE_URL";
import { UserInfo } from "../type/user";

const postFetchSetting = {
  headers: {
    "Content-Type": "application/json",
    credentials: "include",
  },
  method: "POST",
};

export const userSignInPost = (body: UserInfo) => {
  return fetch(`${BASE_URL}/auth/signin`, {
    ...postFetchSetting,
    body: JSON.stringify(body),
  });
};

export const userSignUpPost = (body: UserInfo) => {
  return fetch(`${BASE_URL}/auth/signup`, {
    ...postFetchSetting,
    body: JSON.stringify(body),
  });
};
