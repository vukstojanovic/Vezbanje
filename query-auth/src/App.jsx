import { useRoutes } from "react-router-dom";
import { protectedRoutes } from "./routes/protected";
import { publicRoutes } from "./routes/public";
import useMyDataQuery from "./pages/Auth/api/getMyData";

function App() {
  const { data, isError, isLoading } = useMyDataQuery();

  const routes = !isError && !isLoading ? protectedRoutes : publicRoutes;
  const element = useRoutes(routes);

  return element;
}

export default App;
