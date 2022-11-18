import { useRoutes } from "react-router-dom";
import { protectedRoutes } from "./protected";
import { publicRoutes } from "./public";
import useMyDataQuery from "../pages/Auth/api/getMyData";
import { useAuth } from "../providers/authProvider";

export default function AppRoutes() {
  const { data, isError, isLoading } = useMyDataQuery();
  const { user } = useAuth();

  console.log("user data", user);

  const routes = user ? protectedRoutes : publicRoutes;
  const element = useRoutes(routes);

  return element;
}
