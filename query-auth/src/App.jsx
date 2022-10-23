import { useRoutes } from "react-router-dom";
import { protectedRoutes } from "./routes/protected";
import { publicRoutes } from "./routes/public";

function App() {
  const routes = "" ? protectedRoutes : publicRoutes;
  const element = useRoutes(routes);
  return element;
}

export default App;
