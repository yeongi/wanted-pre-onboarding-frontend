import { userSignUpPost, userSignInPost } from "../api/user";
import { UserInfo } from "../type/user";

export const userSignUp = async (body: UserInfo) => {
  const signUpResult = await userSignUpPost(body);
  const result = await signUpResult.json();
  console.log(result);
};

export const userSignIn = async (body: UserInfo) => {
  const signUpResult = await userSignInPost(body);
  const result = await signUpResult.json();
  console.log(result);
};
