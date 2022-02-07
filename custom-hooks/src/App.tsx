import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import useLocalStorage from "./hooks/useLocalStorage";
import useUpdateLogger from "./hooks/useUpdateLogger";
import useUpdateEffect from "./hooks/useUpdateEffect";
import useEventListener from "./hooks/useEventListener";
import UserForm from "./UserForm";

function App() {
  const [name, setName] = useLocalStorage("name", "");
  useUpdateLogger(name);
  // useUpdateEffect(() => alert("changed name!!!"), [name]);
  useEventListener("click", () => alert("window clicked"), window);

  // useEffect(() => {
  //   window.addEventListener("click", () => alert("window clicked"));
  //   return window.removeEventListener("click", () => alert("window clicked"));
  // }, []);

  return (
    <React.Fragment>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <UserForm />
    </React.Fragment>
  );
}

export default App;
