import { useRoutes } from "react-router-dom";
import { protectedRoutes } from "./routes/protected";
import { publicRoutes } from "./routes/public";
import useMyDataQuery from "./pages/Auth/api/getMyData";
import { useAuth } from "./providers/authProvider";
import AppProvider from "./providers/appProvider";
import AppRoutes from "./routes/index";

function App() {
  // const { data, isError, isLoading } = useMyDataQuery();
  // const { user } = useAuth();

  // console.log(data, isError, user);

  // const routes = user ? protectedRoutes : publicRoutes;
  // const element = useRoutes(routes);

  // return element;
  return (
    <AppProvider>
      <AppRoutes />
    </AppProvider>
  );
}

export default App;
