import type { NextPage } from "next";
import { PropsWithChildren } from "react";
import styles from "../styles/Home.module.css";

type ArticleProps = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

function Home ({ articles }) => {
  console.log(articles);
  return (
    <div className={styles.container}>
      <h1>Welcome to Next</h1>
      {articles.map((article: any) => (
        <h3>{article.title}</h3>
      ))}
    </div>
  );
};

export default Home;

export async function getStaticProps() {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_limit=6`
  );
  const articles = await res.json();

  return {
    props: { articles },
  };
}
