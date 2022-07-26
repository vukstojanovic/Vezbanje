import styles from "../styles/Home.module.css";
import Card from "../components/card/Card";
import axios from "axios";
import { useQuery, QueryClient, dehydrate } from "@tanstack/react-query";
import { useEffect } from "react";

async function getUsers() {
  return axios.get("http://localhost:2000/users");
}

export default function Home() {
  // const { data, isLoading, isSuccess, isError, error } = useQuery(
  //   ["users"],
  //   getUsers
  // );

  // useEffect(() => {
  //   console.log(isSuccess);
  //   console.log(error);
  // }, [isLoading]);

  // if (isLoading) return <h1>Loading...</h1>;

  // if (isSuccess) {
  return (
    <div className={styles["home-page"]}>
      <h1>Next.js news app</h1>
      <h3>You're one stop shop from the latest news articles</h3>
      {/* <div className="container">
          {data.data?.map((user, index) => (
            <Card key={`user-${index}`} {...user} />
          ))}
        </div> */}
    </div>
  );
  // }
}

// export async function getStaticProps() {
//   const queryClient = new QueryClient();

//   await queryClient.prefetchQuery(["users"], getUsers);

//   return {
//     props: {
//       dehydratedState: dehydrate(queryClient),
//     },
//   };
// }
