import { Navigate } from "react-router-dom";
import RoutesLayout from "./layout";
import Login from "../pages/Login/Login";

export const publicRoutes = [
  {
    element: <RoutesLayout />,
    children: [
      {
        element: <Login />,
        path: "/login",
      },
      {
        element: `<Signup />`,
        path: "/signup",
      },
    ],
  },
  {
    element: <Navigate to="/login" />,
    path: "*",
  },
];
