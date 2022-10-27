import { Navigate } from "react-router-dom";
import RoutesLayout from "./layout";
import Login from "../pages/Login/Login";
import Signup from "../pages/Signup/Signup";

export const publicRoutes = [
  {
    element: <RoutesLayout />,
    children: [
      {
        element: <Login />,
        path: "/login",
      },
      {
        element: <Signup />,
        path: "/signup",
      },
    ],
  },
  {
    element: <Navigate to="/login" />,
    path: "*",
  },
];
