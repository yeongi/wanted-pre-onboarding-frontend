import { useNavigate } from "react-router-dom";

export const useRouterTo = () => {
  const navigation = useNavigate();

  return {
    routerTo: (url: string, replace?: boolean) => {
      if (replace) {
        navigation(url, { replace: true });
        return;
      }
      navigation(url);
    },
  };
};
