import React, { useEffect, useState } from "react";

export default function Async() {
  const [posts, setPosts] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:4000/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data))
      .catch((err) => setError(err.message));
  }, []);

  return (
    <div>
      <h1>Async component</h1>
      <ul>
        {posts?.map((post) => {
          const { id, title } = post;
          return <li key={id}>{title}</li>;
        })}
      </ul>
    </div>
  );
}
