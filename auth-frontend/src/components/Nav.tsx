import { NavLink, Outlet } from "react-router-dom";

export default function Nav() {
  return (
    <>
      <div
        style={{
          background: "black",
          padding: "10px",
          color: "gold",
          textAlign: "center",
        }}
      >
        <NavLink
          to="/login"
          style={({ isActive }) =>
            isActive ? { border: "3px solid gold" } : {}
          }
        >
          Login
        </NavLink>
        <NavLink
          to="/signup"
          style={({ isActive }) =>
            isActive ? { border: "3px solid gold" } : {}
          }
        >
          Signup
        </NavLink>
        <NavLink
          to="/publicPosts"
          style={({ isActive }) =>
            isActive ? { border: "3px solid gold" } : {}
          }
        >
          Public
        </NavLink>
        <NavLink
          to="/privatePosts"
          style={({ isActive }) =>
            isActive ? { border: "3px solid gold" } : {}
          }
        >
          Private
        </NavLink>
      </div>
      <Outlet />
    </>
  );
}
