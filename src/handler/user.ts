import { userSignUpPost, userSignInPost } from "../api/user";
import { UserInfo } from "../type/user";

type SignUpResponse = {
  result: boolean;
  message: string;
};

type SignInResponse =
  | {
      result: true;
      access_token: string;
    }
  | {
      result: false;
      message: string;
    };

export const userSignUp = async (body: UserInfo): Promise<SignUpResponse> => {
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

export const userSignIn = async (body: UserInfo): Promise<SignInResponse> => {
  const signUpResult = await userSignInPost(body);
  const { access_token } = await signUpResult.json();
  if (signUpResult.ok) {
    return {
      access_token,
      result: signUpResult.ok,
    };
  }

  return {
    result: false,
    message: signUpResult.statusText,
  };
};
