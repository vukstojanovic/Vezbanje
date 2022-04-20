import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import useUpdateLogger from "./hooks/useUpdateLogger";
import useUpdateEffect from "./hooks/useUpdateEffect";
import useEventListener from "./hooks/useEventListener";
import useInput from "./hooks/useInput";
import UserForm from "./UserForm";
import useLocalStorage from "./useLocalStorage";

function App() {
  const [inputValue, inputObj, inputReset] = useInput("");
  // useUpdateEffect(() => alert("changed name!!!"), [name]);
  useEventListener("click", () => alert("window clicked"), window);
  const [list, setList] = useLocalStorage("list", []);

  // useEffect(() => {
  //   window.addEventListener("click", () => alert("window clicked"));
  //   return window.removeEventListener("click", () => alert("window clicked"));
  // }, []);

  return (
    <React.Fragment>
      <input type="text" {...inputObj} />
      <button onClick={() => setList((prev) => [...prev, inputValue])}>
        Sumbit input
      </button>
      <ul>
        {list.map((el, index) => {
          return <li key={index}>{el}</li>;
        })}
      </ul>
      <UserForm />
    </React.Fragment>
  );
}

export default App;
