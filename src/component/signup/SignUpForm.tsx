import React, { useRef } from "react";
import { UserInfo } from "../../type/user";
import { userSignUp } from "../../handler/user";
import {
  emailRegexpMathcher,
  passwordRegexpMathcher,
} from "../../lib/utils/regexpMatcher";

import { useRouterTo } from "../../lib/hooks/useRouterTo";

const SignUpForm = () => {
  const submitRef = useRef<HTMLButtonElement>(null);
  const { routerTo } = useRouterTo();

  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const userInfo: UserInfo = {
      email: formData.get("email") as string,
      password: formData.get("password") as string,
    };

    const { result, message } = await userSignUp(userInfo);

    if (result) {
      alert(message);
      routerTo("/signin");
    }

    if (!result) {
      alert(message);
    }
  };

  const onChangeFormInput = (e: React.FormEvent<HTMLFormElement>) => {
    const formData = new FormData(e.currentTarget);
    const [email, password] = [
      formData.get("email") as string,
      formData.get("password") as string,
    ];

    if (emailRegexpMathcher(email) && passwordRegexpMathcher(password)) {
      if (submitRef.current) submitRef.current.disabled = false;
    } else {
      if (submitRef.current) submitRef.current.disabled = true;
    }
  };

  return (
    <form onSubmit={submitHandler} onChange={onChangeFormInput}>
      <label>
        이메일 :
        <input name="email" type="text" data-testid="email-input" />
        <p>이메일은 반드시 @를 포함하셔야 합니다.</p>
      </label>
      <br />
      <label>
        비밀번호 :
        <input name="password" type="password" data-testid="password-input" />
        <p>비밀번호는 8자리 이상 입력해주셔야 합니다.</p>
      </label>
      <br />
      <button
        type="submit"
        data-testid="signup-button"
        ref={submitRef}
        disabled
      >
        회원가입하기
      </button>
    </form>
  );
};

export default SignUpForm;
