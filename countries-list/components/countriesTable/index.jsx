import styles from "./countriesTable.module.css";
import countries from "../dummy";

function CountriesTable() {
  return (
    <section className={styles["countries-table"]}>
      <div className={styles["head-field"]}>Name</div>
      <div className={styles["head-field"]}>Population</div>
      <div className={styles["head-field"]}>Area (km)</div>
      <div className={styles["head-field"]}>Gini</div>
      {countries.map((country) => {
        const { name, population, area, gini } = country;
        return (
          <>
            <div className={styles["country-field"]}>{name}</div>
            <div className={styles["country-field"]}>{population}</div>
            <div className={styles["country-field"]}>{area}</div>
            <div className={styles["country-field"]}>{gini}</div>
          </>
        );
      })}
    </section>
  );
}

export default CountriesTable;
