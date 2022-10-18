import { Navigate } from "react-router-dom";
import RoutesLayout from "./layout";

export const protectedRoutes = [
  {
    element: <RoutesLayout />,
    children: [
      {
        element: `<Employees />`,
        path: "/employees",
      },
      {
        element: `<Products />`,
        path: "/products",
      },
      {
        element: `<Projects />`,
        path: "/projects",
      },
    ],
  },
  {
    element: <Navigate to="/employees" />,
    path: "*",
  },
];
