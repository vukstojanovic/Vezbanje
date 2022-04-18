import { Navigate, Outlet } from "react-router";

function ProtectedRoute({ allowedRoles }) {
  if (allowedRoles.some((role) => role === localStorage.getItem("role"))) {
    return <Outlet />;
  }
  return <Navigate to="/welcome" />;
}

export default ProtectedRoute;
