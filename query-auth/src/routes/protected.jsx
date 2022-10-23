import { Navigate } from "react-router-dom";
import RoutesLayout from "./layout";
import Employees from "../pages/Employees/Employees";
import Projects from "../pages/Projects/Projects";
import Products from "../pages/Products/Products";

export const protectedRoutes = [
  {
    element: <RoutesLayout />,
    children: [
      {
        element: <Employees />,
        path: "/employees",
      },
      {
        element: <Products />,
        path: "/products",
      },
      {
        element: <Projects />,
        path: "/projects",
      },
    ],
  },
  {
    element: <Navigate to="/employees" />,
    path: "*",
  },
];
