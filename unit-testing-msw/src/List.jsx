import React from "react";

export default function List({ listItems }) {
  return (
    <div>
      <ul>
        {listItems.map((item) => {
          return <li key={item}>{item}</li>;
        })}
      </ul>
    </div>
  );
}
