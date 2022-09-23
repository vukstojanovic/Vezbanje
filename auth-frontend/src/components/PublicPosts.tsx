import { useQuery } from "@tanstack/react-query";
import { getPublicPosts } from "src/services";

export default function PublicPosts() {
  const { data, isLoading, isError } = useQuery(
    ["publicPosts"],
    getPublicPosts
  );

  if (isLoading) return <h1>Loading...</h1>;

  return (
    <div style={{ padding: "20px" }}>
      {data &&
        data.data.map((item) => {
          const { title, content } = item;
          return (
            <div key={title}>
              <h3>{title}</h3>
              <p>{content}</p>
            </div>
          );
        })}
    </div>
  );
}
