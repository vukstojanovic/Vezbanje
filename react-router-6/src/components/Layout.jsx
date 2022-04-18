import { Fragment } from "react";
import { Outlet } from "react-router";

function Layout() {
  return (
    <Fragment>
      <div className="layout">
        <h2>Just a layout example...</h2>
      </div>
      <div className="outlet-container">
        <Outlet />
      </div>
    </Fragment>
  );
}

export default Layout;
