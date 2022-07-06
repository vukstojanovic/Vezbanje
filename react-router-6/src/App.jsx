import "./App.css";
import Welcome from "./components/Welcome";
import Layout from "./components/Layout";
import Technologies from "./components/Technologies";
import Employees from "./components/Employees";
import ProjectsPage from "./components/ProjectsPage";
import ProtectedRoute from "./routes/ProtectedRoute";
import { Routes, Route, Navigate, useRoutes, Outlet } from "react-router-dom";

function App() {
  const routeElement = useRoutes([
    {
      path: "/",
      element: <div>Welcome!!!!</div>,
    },
    {
      path: "/home",
      element: (
        <div>
          <b>Home</b>
          <Outlet />
        </div>
      ),
      children: [
        { path: "one", element: <div>One</div> },
        { path: "two", element: <div>Two</div> },
      ],
    },
    {
      path: "/about",
      element: (
        <div>
          <b>About</b>
        </div>
      ),
    },
  ]);

  return (
    <div className="App">
      {/* <MainHeader /> */}
      <main>
        {routeElement}
        {/* <Routes>
          <Route path="/welcome" element={<Welcome />} />
          <Route element={<Layout />}>
            <Route element={<ProtectedRoute allowedRoles={["admin"]} />}>
              <Route path="/technologies" element={<Technologies />} />
            </Route>
            <Route element={<ProtectedRoute allowedRoles={["manager"]} />}>
              <Route path="/employees" element={<Employees />} />
            </Route>
            <Route
              element={<ProtectedRoute allowedRoles={["manager", "admin"]} />}
            >
              <Route path="/projects" element={<ProjectsPage />} />
            </Route>
          </Route>
        </Routes> */}
      </main>
    </div>
  );
}

export default App;
