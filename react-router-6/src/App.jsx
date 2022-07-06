import "./App.css";
import Welcome from "./components/Welcome";
import Layout from "./components/Layout";
import Technologies from "./components/Technologies";
import Employees from "./components/Employees";
import ProjectsPage from "./components/ProjectsPage";
import ProtectedRoute from "./routes/ProtectedRoute";
import { Routes, Route, Navigate, useRoutes, Outlet } from "react-router-dom";
import { useState } from "react";

function App() {
  const [season, setSeason] = useState("duck");
  const duckRoutes = [
    {
      path: "/ducks",
      element: <div>Qua qua qua qua qua qua!!!!</div>,
    },
    {
      path: "/duffy",
      element: (
        <div>
          <b>Boom chaka boom chaka boom chaka boom</b>
        </div>
      ),
    },
    {
      path: "/",
      element: (
        <div>
          <b>check out duck routes</b>
        </div>
      ),
    },
  ];
  const rabbitRoutes = [
    {
      path: "/rabbits",
      element: <div>Hop hop hop hop hop hop hop!!!</div>,
    },
    {
      path: "/bugs",
      element: (
        <div>
          <b>This means war</b>
        </div>
      ),
    },
    {
      path: "/",
      element: (
        <div>
          <b>check out rabbit routes</b>
        </div>
      ),
    },
  ];
  const currentRoutes = season === "duck" ? duckRoutes : rabbitRoutes;
  const routeElement = useRoutes(currentRoutes);

  function changeSeason() {
    if (season === "duck") {
      setSeason("rabbit");
    } else {
      setSeason("duck");
    }
  }

  return (
    <div className="App">
      {/* <MainHeader /> */}
      <header>
        <button onClick={changeSeason}>{season} season!!!</button>
      </header>
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
