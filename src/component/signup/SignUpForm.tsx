import React from "react";
import { UserInfo } from "../../type/user";
import { userSignUp } from "../../handler/user";

const SignUpForm = () => {
  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const userInfo: UserInfo = {
      email: formData.get("userId") as string,
      password: formData.get("password") as string,
    };

    console.log(userInfo);
    // const signUpResult = await userSignUp(userInfo);
  };

  return (
    <form onSubmit={submitHandler}>
      <label>
        이메일 :
        <input name="userId" type="text" data-testid="email-input" />
      </label>
      <br />
      <label>
        비밀번호 :
        <input name="password" type="password" data-testid="password-input" />
      </label>
      <br />
      <button type="submit" data-testid="signup-button">
        회원가입하기
      </button>
    </form>
  );
};

export default SignUpForm;
