import Layout from "../components/Layout/Layout";
import { Outlet } from "react-router-dom";

export default function RoutesLayout() {
  return (
    <Layout>
      <Outlet />
    </Layout>
  );
}
