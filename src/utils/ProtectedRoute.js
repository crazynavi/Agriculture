import { Navigate, Outlet } from "react-router-dom";

import { isRoleAllowed } from "./isRoleAllowed";

export const ProtectedRoute = ({
  role,
  redirectPath = "/",
}) => {
  if (!isRoleAllowed(role)) {
    return <Navigate to={redirectPath} replace />;
  }

  return <Outlet />;
};
