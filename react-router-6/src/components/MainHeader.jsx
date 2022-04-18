import { NavLink } from "react-router-dom";

function MainHeader() {
  return (
    <div className="main-header">
      <NavLink
        className={(navData) => (navData.isActive ? "active-link" : "")}
        to="/welcome"
      >
        <span>Welcome</span>
      </NavLink>
      <NavLink
        className={(navData) => (navData.isActive ? "active-link" : "")}
        to="/products"
      >
        <span>Products</span>
      </NavLink>
    </div>
  );
}

export default MainHeader;
