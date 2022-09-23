import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { getPrivatePosts, Post } from "src/services";

export default function PrivatePosts() {
  const { data, isLoading, isError, error } = useQuery<
    { data: Post[] },
    AxiosError
  >(["privatePosts"], getPrivatePosts);

  if (isLoading) return <h1>Loading...</h1>;

  if (isError) return <h1>{error?.message}</h1>;

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
