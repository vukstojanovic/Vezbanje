import logo from "./logo.svg";
import "./App.css";
import MainHeader from "./MainHeader";
import Welcome from "./Welcome";
import Products from "./Products";
import ProductDetail from "./ProductDetail";
import Layout from "./Layout";
import Technologies from "./Technologies";
import Employees from "./Employees";
import ProjectsPage from "./ProjectsPage";
import ProtectedRoute from "./ProtectedRoute";
import { Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <div className="App">
      {/* <MainHeader /> */}
      <main>
        <Routes>
          <Route path="/welcome" element={<Welcome />} />
          <Route element={<Layout />}>
            <Route element={<ProtectedRoute allowedRole="admin" />}>
              <Route path="/technologies" element={<Technologies />} />
            </Route>
            <Route element={<ProtectedRoute allowedRole="manager" />}>
              <Route path="/employees" element={<Employees />} />
            </Route>
            <Route path="/projects" element={<ProjectsPage />} />
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
