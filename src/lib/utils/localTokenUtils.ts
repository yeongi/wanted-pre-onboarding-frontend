const { localStorage } = window;

const tokenKey = "accessToken";

export const putUserTokenInLocalStorage = (token: string) => {
  localStorage.setItem(tokenKey, token);
  return;
};

export const getUserTokenInLocalStorage = () => {
  return localStorage.getItem(tokenKey);
};

export const removeUserTokenInLocalStorage = () => {
  localStorage.removeItem(tokenKey);
};
