import React from "react";
import { UserInfo } from "../../type/user";
import { userSignIn } from "../../handler/user";

const SignInForm = () => {
  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const userInfo: UserInfo = {
      email: formData.get("userId") as string,
      password: formData.get("password") as string,
    };

    console.log(userInfo);
    const signInResult = await userSignIn(userInfo);
    console.log(signInResult);
  };

  return (
    <form onSubmit={submitHandler}>
      <p>
        <label>
          이메일 :
          <input name="userId" type="text" data-testid="email-input" />
        </label>
      </p>

      <br />
      <p>
        <label>
          비밀번호 :
          <input name="password" type="password" data-testid="password-input" />
        </label>
      </p>

      <br />
      <p>
        <button type="submit" data-testid="signin-button">
          로그인 하기
        </button>
      </p>
    </form>
  );
};

export default SignInForm;
