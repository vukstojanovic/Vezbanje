import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "./routes/ProtectedRoute";
import Nav from "./components/Nav";
import Login from "./components/Login";
import Signup from "./components/Signup";
import PublicPosts from "./components/PublicPosts";
import PrivatePosts from "./components/PrivatePosts";

function App() {
  return (
    <Routes>
      <Route element={<Nav />}>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/publicPosts" element={<PublicPosts />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/privatePosts" element={<PrivatePosts />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
