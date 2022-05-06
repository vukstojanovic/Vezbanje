import styles from "./Header.module.css";
import Logo from "../../assets/Logo.svg";
import Image from "next/image";
import Link from "next/link";
import Brightness6Icon from "@mui/icons-material/Brightness6";
import { useState, useEffect } from "react";

function Header() {
  const [currentTheme, setCurrentTheme] = useState("light");

  function toggleBrightness() {
    if (currentTheme === "light") {
      setCurrentTheme("dark");
    } else {
      setCurrentTheme("light");
    }
  }

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", currentTheme);
  }, [currentTheme]);

  return (
    <header className={styles.header}>
      <div className={styles["img-container"]}>
        <Link href="/">
          <Image src={Logo} />
        </Link>
        <Brightness6Icon color="inherit" onClick={toggleBrightness} />
      </div>
    </header>
  );
}

export default Header;
