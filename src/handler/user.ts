import { userSignUpPost, userSignInPost } from "../api/user";
import { UserInfo } from "../type/user";

type SignResponse = {
  result: boolean;
  message: string;
};

export const userSignUp = async (body: UserInfo): Promise<SignResponse> => {
  const signUpResult = await userSignUpPost(body);

  if (signUpResult.ok) {
    return {
      result: signUpResult.ok,
      message: signUpResult.statusText,
    };
  }

  const badRes = await signUpResult.json();
  return {
    result: false,
    message: badRes.message,
  };
};

export const userSignIn = async (body: UserInfo) => {
  const signUpResult = await userSignInPost(body);
  const result = await signUpResult.json();
  console.log(result);
  return {
    result: result.status === 200 ? true : false,
    message: result.message,
  };
};
