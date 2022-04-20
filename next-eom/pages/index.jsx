import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles["home-page"]}>
      <h1>Next.js news app</h1>
      <h3>You're one stop shop from the latest news articles</h3>
    </div>
  );
}
