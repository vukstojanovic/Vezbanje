import { Navigate, Outlet } from "react-router";

function ProtectedRoute({ allowedRole }) {
  if (localStorage.getItem("role") === allowedRole) {
    return <Outlet />;
  }
  return <Navigate to="/welcome" />;
}

export default ProtectedRoute;
