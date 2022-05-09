import { Fragment } from "react";
import Header from "../Header";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <Fragment>
      <Header />
      <main>
        <Outlet />
      </main>
    </Fragment>
  );
}
