import { Link, BrowserRouter, Routes, Route, redirect } from "react-router-dom";
import { axiosInstance } from "./api";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";

function HomePage() {
  const [isEnabled, setIsEnabled] = useState(false);
  const { data, isLoading, isError } = useQuery(
    ["echo"],
    () => axiosInstance.get("/echo"),
    { enabled: isEnabled }
  );

  //   useEffect(() => {
  //     redirect("/contact");
  //   }, []);

  return (
    <div>
      <p>Home Page</p>
      <button onClick={() => setIsEnabled(true)}>Activate query</button>
      {isLoading && <p>Loading...</p>}
      {isError && <p>Error</p>}
    </div>
  );
}

export default function Test() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<div>About Page</div>} />
          <Route path="/contact" element={<div>Contact Page</div>} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}
