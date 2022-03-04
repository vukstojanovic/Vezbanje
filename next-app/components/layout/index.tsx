import { PropsWithChildren } from "react";
import styles from "../../styles/Layout.module.css";
import Nav from "../nav";
import Header from "../header";

export default function Layout({ children }: PropsWithChildren<unknown>) {
  return (
    <div className={styles.container}>
      <Nav />
      <Header />
      <main className={styles.main}>{children}</main>
    </div>
  );
}
