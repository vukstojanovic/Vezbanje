import { useRoutes } from "react-router-dom";
import { protectedRoutes } from "./routes/protected";
import { publicRoutes } from "./routes/public";
import useMyDataQuery from "./pages/Auth/api/getMyData";
import { useAuth } from "./providers/authProvider";
import AppProvider from "./providers/appProvider";
import AppRoutes from "./routes/index";
import InjectInterceptors from "./components/InjectInterceptors/InjectInterceptors";
import { useEffect, useState } from "react";

function App() {
  const { data, isError, isLoading } = useMyDataQuery();
  const isAuth = !isError && !isLoading;
  // const { user } = useAuth();

  const routes = isAuth ? protectedRoutes : publicRoutes;
  const element = useRoutes(routes);

  return (
    <>
      <InjectInterceptors />
      {element}
    </>
  );
}

export default App;
