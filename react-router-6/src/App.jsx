import logo from "./logo.svg";
import "./App.css";
import MainHeader from "./MainHeader";
import Welcome from "./Welcome";
import Products from "./Products";
import ProductDetail from "./ProductDetail";
import { Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <MainHeader />
      <main>
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
      </main>
    </div>
  );
}

export default App;
