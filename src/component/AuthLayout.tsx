import { useEffect } from "react";
import { useRouterTo } from "../lib/hooks/useRouterTo";
import { getUserTokenInLocalStorage } from "../lib/utils/localTokenUtils";

interface RedirectLayoutProps {
  children: React.ReactNode;
  withAuth: boolean;
  to: string;
}

const AuthLayout = (props: RedirectLayoutProps) => {
  const { routerTo } = useRouterTo();

  useEffect(() => {
    let curAuth: boolean = getUserTokenInLocalStorage() === null ? false : true;

    if (props.withAuth) {
      if (!curAuth) routerTo(props.to, true);
    }

    if (!props.withAuth) {
      if (curAuth) routerTo(props.to, true);
    }
  });

  return <>{props.children}</>;
};

export default AuthLayout;
