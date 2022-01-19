import React, { FormEventHandler, useEffect, useRef, useState } from "react";
import useInput from "./hooks/useInput";
import useKey from "./hooks/useKey";

export default function UserForm() {
  const [firstName, bindFirstName] = useInput("");
  const [lastName, bindLastName] = useInput("");
  // useKey("s", () => alert("key pressed"));

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
