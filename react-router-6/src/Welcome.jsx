import { useState } from "react";
import { Link, Outlet, useNavigate, useSearchParams } from "react-router-dom";

function Welcome() {
  const [counter, setCounter] = useState(1);
  const [searchParams, setSearchParams] = useSearchParams({});
  const navigate = useNavigate();

  function increase() {
    setCounter((prev) => prev + 1);
    searchParams.set("counter", counter);
    setSearchParams(searchParams);
    // console.log(counter);
  }

  function loginAsManager() {
    localStorage.setItem("role", "manager");
    navigate("/projects");
  }

  function loginAsAdmin() {
    localStorage.setItem("role", "admin");
    navigate("/projects");
  }

  return (
    <div>
      <h2>Welcome!!!</h2>
      {/* <Link to="/new-article">Click to reveal new article...</Link> */}
      <Outlet />
      <button onClick={increase}>Check counter</button>
      <button onClick={loginAsAdmin}>Login as admin</button>
      <button onClick={loginAsManager}>Login as manager</button>
    </div>
  );
}

export default Welcome;
