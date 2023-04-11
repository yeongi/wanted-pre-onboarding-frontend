import { useNavigate } from "react-router-dom";

export const useRouterTo = () => {
  const navigation = useNavigate();

  return {
    routerTo: (url: string) => {
      navigation(url);
    },
  };
};
