import { Navigate } from "react-router-dom";

type PrivateRouteProps = {
  children: JSX.Element;
};
export { PrivateRoute };

function PrivateRoute({ children }: PrivateRouteProps) {
  const persistAuth = localStorage.getItem("auth");

  if (!persistAuth) {
    return <Navigate to="/login" />;
  }
  return children;
}
