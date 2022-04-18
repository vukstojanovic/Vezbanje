import logo from "./logo.svg";
import "./App.css";
import MainHeader from "./components/MainHeader";
import Welcome from "./components/Welcome";
import Products from "./components/Products";
import ProductDetail from "./components/ProductDetail";
import Layout from "./components/Layout";
import Technologies from "./components/Technologies";
import Employees from "./components/Employees";
import ProjectsPage from "./components/ProjectsPage";
import ProtectedRoute from "./routes/ProtectedRoute";
import { Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <div className="App">
      {/* <MainHeader /> */}
      <main>
        <Routes>
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
        </Routes>
      </main>
      {/* <main>
        <Routes>
          <Route path="/welcome" element={<Welcome />}>
            <Route
              path="new-article"
              element={<p>The new article spawned!!!</p>}
            />
          </Route>
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetail />} />
          <Route path="/hello" element={<Navigate to="/welcome" />} />
        </Routes>
      </main> */}
    </div>
  );
}

export default App;
