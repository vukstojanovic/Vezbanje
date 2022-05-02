import styles from "./GeneralData.module.css";

function GeneralData({ flag, commonName, population, area, region }) {
  return (
    <div className={styles["general-data"]}>
      <img src={flag} alt={`flag of ${commonName}`} />
      <h1 className={styles["country-name"]}>{commonName}</h1>
      <p className={styles["country-continent"]}>{region}</p>
      <div className={styles["population-and-area"]}>
        <div className={styles["number-and-description"]}>
          <div className={styles["number"]}>{population.toLocaleString()}</div>
          <div className={styles["description"]}>Population</div>
        </div>
        <div className={styles["number-and-description"]}>
          <div className={styles["number"]}>{area.toLocaleString()}</div>
          <div className={styles["description"]}>Area(km)</div>
        </div>
      </div>
    </div>
  );
}

export default GeneralData;
