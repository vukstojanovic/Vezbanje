import Head from "next/head";
// import { useQuery } from "react-query";
import styles from "../styles/Home.module.css";
import Card from "../components/Card";
import axios from "axios";
import { divide } from "lodash";

export default function Home() {
  // const { data, isLoading, isSuccess } = useQuery(
  //   "usersQuery",
  //   axios.get("http://localhost:2000/users")
  // );

  // if (isLoading) return <h1>Loading...</h1>;

  // if (isSuccess) {
  //   return (
  //     <div className={styles.container}>
  //       <Head>
  //         <title>Create Next App</title>
  //         <meta name="description" content="Generated by create next app" />
  //         <link rel="icon" href="/favicon.ico" />
  //       </Head>
  //       <div className="container">
  //         {data.users.map((user) => (
  //           <Card {...user} />
  //         ))}
  //       </div>
  //     </div>
  //   );
  // }
  return <div>hello</div>;
}