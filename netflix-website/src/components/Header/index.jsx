import styles from "./Header.module.css";
import avatar from "../../assets/avatar.png";
import logo from "../../assets/Netflix_logo.svg";
import { useEffect, useState } from "react";

export default function Header() {
  const [isDark, setIsDark] = useState(false);

  function onScroll() {
    if (window.scrollY >= 150) {
      setIsDark(true);
    } else {
      setIsDark(false);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", () => onScroll());
    return window.removeEventListener("scroll", () => onScroll());
  }, []);

  return (
    <header className={`${styles.header} ${isDark && styles.black}`}>
      <div className={styles["header-content"]}>
        <img src={logo} alt="netflix-logo" className={styles.logo} />
        <nav className={styles.navlinks}>
          <div className={styles.navlink}>Home</div>
          <div className={styles.navlink}>Movies</div>
          <div className={styles.navlink}>News & popular</div>
          <div className={styles.navlink}>My List</div>
        </nav>
      </div>
      <div className={styles["header-content"]}>
        <img src={avatar} alt="avatar-netflix" className={styles.avatar} />
      </div>
    </header>
  );
}
