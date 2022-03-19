import { Link, Outlet } from "react-router-dom";

function Welcome() {
  return (
    <div>
      <h2>Welcome!!!</h2>
      {/* <Link to="/new-article">Click to reveal new article...</Link> */}
      <Outlet />
    </div>
  );
}

export default Welcome;
