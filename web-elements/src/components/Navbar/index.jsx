import styles from "./Navbar.module.css";
import { useRef, useEffect, useState } from "react";
import navData from "./NavData";

export default function Navbar() {
  const cloud = useRef(null);
  const [isSubmenuOpened, setIsSubmenuOpened] = useState(false);
  const [currentCloudData, setCurrentCloudData] = useState([]);
  const [location, setLocation] = useState({});

  function handleCloud(e) {
    setIsSubmenuOpened(true);
    setCurrentCloudData(
      navData.find((el) => el.name === e.target.textContent).dropdown
    );
    const position = e.target.getBoundingClientRect();
    const left = position.left;
    const bottom = position.bottom + 5;
    setLocation({ top: bottom, left: left });
  }

  function handleCloseCloud(e) {
    if (e.target.tagName !== "LI") {
      setIsSubmenuOpened(false);
    }
  }

  useEffect(() => {
    cloud.current.style.top = `${location.top}px`;
    cloud.current.style.left = `${location.left}px`;
  }, [location]);

  return (
    <>
      <nav className={styles.navbar} onMouseOver={handleCloseCloud}>
        <ul className={styles.navcontent}>
          <li className={styles.navelement} onMouseOver={handleCloud}>
            clients
          </li>
          <li className={styles.navelement} onMouseOver={handleCloud}>
            technologies
          </li>
          <li className={styles.navelement} onMouseOver={handleCloud}>
            projects
          </li>
          <li className={styles.navelement} onMouseOver={handleCloud}>
            movies
          </li>
        </ul>

        <div
          className={isSubmenuOpened ? styles.cloud : styles.hidden}
          ref={cloud}
        >
          <ul className={styles.dropdown}>
            {currentCloudData.map((el, index) => {
              return <li key={index}>{el}</li>;
            })}
          </ul>
        </div>
      </nav>
    </>
  );
}
