import Link from "next/link";
import styles from "./Toolbar.module.css";

export default function Toolbar() {
  return (
    <div className={styles["main"]}>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/feed/1">Feed</Link>
        </li>
        <li>
          <Link href="/eom">EOM</Link>
        </li>
        <li>
          <Link href="https://twitter.com/bogoslovb">Twitter</Link>
        </li>
      </ul>
    </div>
  );
}
