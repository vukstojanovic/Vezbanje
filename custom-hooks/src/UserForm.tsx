import React, { FormEventHandler, useRef, useState } from "react";
import useInput from "./hooks/useInput";

export default function UserForm() {
  const [firstName, bindFirstName] = useInput("");
  const [lastName, bindLastName] = useInput("");
  //   const someRef = useRef(null);

  //   const someObj = {
  //     name: "Vuk",
  //     age: 29,
  //   };

  //   console.log(someRef.current);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    alert("Hello " + firstName + " " + lastName);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="">First Name</label>
        <input type="text" {...bindFirstName} />
      </div>
      <div>
        <label htmlFor="">Last Name</label>
        <input type="text" {...bindLastName} />
      </div>
      <button>Submit</button>
    </form>
  );
}
