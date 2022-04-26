import styles from "./Header.module.css";
import Logo from "../../assets/Logo.svg";
import Image from "next/image";

function Header() {
  return (
    <header className={styles.header}>
      <Image src={Logo} />
    </header>
  );
}

export default Header;
