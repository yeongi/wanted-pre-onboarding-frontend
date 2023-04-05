### 기능 요구사항

- [ ] 로그인 페이지 #signin
  - [ ] 로그인 기능
    - [ ] 성공 시 JWT 토큰 로컬스토리지에 저장
- [ ] 회원가입 페이지 #signup
  - [ ] 회원가입 기능
    - [ ] 성공 시 `/signin` 리다이렉트
- [ ] 공통 기능

  - [ ] 예외 처리
    - [ ] 이메일 조건: `@` 포함
    - [ ] 비밀번호 조건: 8자 이상
  - [ ] 리다이렉트
    - [ ] 토큰 있으면 `/todo` 리다이렉트

- [ ] 투두리스트 페이지 #todo
  - [ ] 투두리스트 추가
  - [ ] 투두리스트 수정
  - [ ] 투두리스트 체크
  - [ ] 투두리스트 삭제

### 과제

### 1. 로그인 / 회원가입

- [ ] `/signup` 경로에 회원가입 기능 `/signin` 경로에 로그인 기능
- [ ] 페이지 안에 이메일 input, 비밀번호 input, 제출 button이 포함된 형태로 구성해주세요
  - 이메일 input에 `data-testid="email-input"` 속성을 부여해주세요
  - 패스워드 input에 `data-testid="password-input"` 속성을 부여해주세요
  - 회원가입 button에 `data-testid="signup-button"` 속성을 부여해주세요
  - 로그인 button에 `data-testid="signin-button"` 속성을 부여해주세요

```tsx
<!-- 예시 -->
<input data-testid="email-input" />
<input data-testid="password-input" />
<button data-testid="signup-button">회원가입</button>
```

- 두 페이지의 UI는 동일해도 무방합니다.
- 회원가입과 로그인 페이지의 버튼에 부여되는 test-id가 다른 것에 유의해주세요

### Assignment 1

- [ ] 회원가입과 로그인 페이지에 이메일과 비밀번호의 유효성 검사기능 구현
  - 이메일 조건: `@` 포함
  - 비밀번호 조건: 8자 이상
  - 이메일과 비밀번호의 유효성 검사 조건은 별도의 추가 조건 부여 없이 위의 조건대로만 진행해주세요 (e.g. 비밀번호 유효성 검사에 특수문자 포함 등의 새로운 조건을 추가하는 행위, 비밀번호 확인 조건을 추가하는 행위 등은 지양해주세요)
- [ ] 입력된 이메일과 비밀번호가 유효성 검사를 통과하지 못한다면 button에 `disabled` 속성을 부여
  - 보안 상 실제 사용하고 계신 이메일과 패스워드말고 테스트용 이메일, 패스워드 사용을 권장드립니다.

### Assignment 2

- [ ] 회원가입 페이지에서 버튼을 클릭 시 회원가입을 진행하고 회원가입이 정상적으로 완료되었을 시 `/signin` 경로로 이동

### Assignment 3

- [ ] 로그인 페이지에서 버튼을 클릭 시, 로그인을 진행하고 로그인이 정상적으로 완료되었을 시 `/todo` 경로로 이동
- [ ] 반환 받은 JWT 응답을 로컬스토리지에 저장하기

### Assignment 4

- [ ] 로그인 여부에 따른 리다이렉트 처리를 구현
  - [ ] 로컬 스토리지에 토큰이 있는 상태로 `/signin` 또는 `/signup` 페이지에 접속한다면 `/todo` 경로로 리다이렉트
  - [ ] 로컬 스토리지에 토큰이 없는 상태로 `/todo`페이지에 접속한다면 `/signin` 경로로 리다이렉트

---

### 2. TODO LIST

### Assignment 5

- [ ] `/todo`경로에 접속하면 투두 리스트의 목록 조회
  - [ ] 목록에서는 TODO의 내용과 완료 여부가 표시
  - [ ] TODO의 완료 여부는 `<input type="checkbox" />`를 통해 표현
  - [ ] TODO는 `<li>` tag를 이용해 감싸주세요

```tsx
<li>
  <label>
    <input type="checkbox" />
    <span>TODO 1</span>
  </label>
</li>
<li>
  <label>
    <input type="checkbox" />
    <span>TODO 2</span>
  </label>
</li>
```

### Assignment 6

- [ ] 리스트 페이지에 새로운 TODO를 입력할 수 있는 input과 추가 button
  ```tsx
  <input data-testid="new-todo-input" />
  <button data-testid="new-todo-add-button">추가</button>
  ```
  - [ ] TODO 입력 input에는 `data-testid="new-todo-input"` 속성을 부여해주세요
  - [ ] TODO 추가 button에는 `data-testid="new-todo-add-button"` 속성을 부여해주세요
  - [ ] 추가 button을 클릭하면 입력 input의 내용이 새로운 TODO로 추가
  - [ ] TODO를 추가 한 뒤 새로고침을 해도 추가한 TODO가 목록에 보여야 합니다.

### Assignment 7

- [ ] TODO의 체크박스를 통해 완료 여부를 수정할 수 있도록 해주세요.

### Assignment 8

- [ ] TODO 우측에 수정버튼과 삭제 버튼을 만들어주세요
- [ ] 수정 버튼에는 `data-testid="modify-button"` 속성을 부여해주세요
- [ ] 삭제 버튼에는 `data-testid="delete-button"` 속성을 부여해주세요

```tsx
<li>
  <label>
    <input type="checkbox" />
    <span>TODO 1</span>
  </label>
  <button data-testid="modify-button">수정</button>
  <button data-testid="delete-button">삭제</button>
</li>
```

### Assignment 9

- [ ] 투두 리스트의 삭제 기능을 구현해주세요
- [ ] 투두 리스트의 TODO 우측의 삭제버튼을 누르면 해당 아이템이 삭제되도록 해주세요

### Assignment 10

- [ ] 투두 리스트의 수정 기능을 구현해주세요
- [ ] TODO 우측의 수정 버튼을 누르면 수정모드가 활성화
  - 수정모드에서는 TODO의 내용을 변경할 수 있어야 합니다.
  - 수정모드에서는 TODO의 내용이 input창 안에 입력된 형태로 변경해주세요
  - 수정 input창에는 `data-testid="modify-input"` 속성을 부여해주세요
- [ ] 수정모드에서는 TODO의 우측에 제출버튼과 취소버튼이 표시되게 해주세요
  - 제출버튼에는 `data-testid="submit-button"` 속성을 부여해주세요
  - 취소버튼에는 `data-testid="cancel-button"` 속성을 부여해주세요
- [ ] 제출버튼을 누르면 수정한 내용을 제출해서 내용이 업데이트 될 수 있도록 해주세요
- [ ] 취소버튼을 누르면 수정한 내용을 초기화 하고, 수정모드를 비활성화 해주세요

```tsx
<input data-testid="modify-input" />
<button data-testid="submit-button">제출</button>
<button data-testid="cancel-button">취소</button>
```
