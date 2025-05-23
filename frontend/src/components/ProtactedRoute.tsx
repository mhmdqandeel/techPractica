import { ReactNode } from "react";
import { Navigate } from "react-router-dom";

interface IProps {
  isAllowed: boolean;
  redirectPath?: string;
  children: ReactNode;
}
const ProtactedRoute = ({
  isAllowed,
  redirectPath = "/",
  children,
}: IProps) => {
  if (isAllowed) return children;
  return <Navigate to={redirectPath} />;
};
export default ProtactedRoute;
