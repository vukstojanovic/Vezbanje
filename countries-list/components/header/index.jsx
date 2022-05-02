import styles from "./Header.module.css";
import Logo from "../../assets/Logo.svg";
import Image from "next/image";
import Link from "next/link";

function Header() {
  return (
    <header className={styles.header}>
      <Link href="/">
        <Image src={Logo} />
      </Link>
    </header>
  );
}

export default Header;
