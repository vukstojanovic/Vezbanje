import styles from "./Child.module.css";

export default function Child() {
  throw Error("ooops some deliberate error");
  return <div className={styles.child}>This is a child component</div>;
}
