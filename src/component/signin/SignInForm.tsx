import React from "react";
import { UserInfo } from "../../type/user";
import { userSignIn } from "../../handler/user";
import { useRouterTo } from "../../lib/hooks/useRouterTo";
import { putUserTokenInLocalStorage } from "../../lib/utils/localTokenUtils";

const SignInForm = () => {
  const { routerTo } = useRouterTo();

  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const userInfo: UserInfo = {
      email: formData.get("userId") as string,
      password: formData.get("password") as string,
    };

    const signInResult = await userSignIn(userInfo);

    if (signInResult.result) {
      putUserTokenInLocalStorage(signInResult.access_token);

      routerTo("/todo");
    }

    if (!signInResult.result) {
      alert(signInResult.message);
    }
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
