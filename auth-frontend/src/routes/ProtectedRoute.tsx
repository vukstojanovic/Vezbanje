import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useJwt } from "react-jwt";
import jwtDecode from "jwt-decode";

export default function ProtectedRoute() {
  const location = useLocation();
  const accessToken = localStorage.getItem("accessToken") || "";
  const decodedToken: { email?: string } = jwtDecode(accessToken);

  if (decodedToken?.email) return <Outlet />;

  return <Navigate to="/login" state={{ from: location }} />;
}
