import styles from "./countriesTable.module.css";
import countries from "../dummy";
import { FaSearch } from "react-icons/fa";
import { useRouter } from "next/router";
import { Fragment } from "react";

function CountriesTable({ countriesList }) {
  const router = useRouter();
  console.log(countriesList);

  function searchByInput(e) {
    e.preventDefault();
    router.push({ query: { sea: "someLetter" } });
  }

  return (
    <div className={styles["countries-page"]}>
      <section className={styles["search-segment"]}>
        <p>Found 3 countries</p>
        <form onSubmit={searchByInput} className={styles["input-container"]}>
          <FaSearch size={18} />
          <input type="text" placeholder="Filter by Name, Region, Subregion" />
        </form>
      </section>
      <section className={styles["countries-table"]}>
        <div className={styles["head-field"]}>&nbsp;</div>
        <div className={`${styles["head-field"]} ${styles["head-name"]}`}>
          Name
        </div>
        <div className={styles["head-field"]}>Population</div>
        <div className={styles["head-field"]}>Area (km)</div>
        <div className={styles["head-field"]}>Gini</div>
        {countriesList.map((country, index) => {
          const { flags, name, population, area, gini } = country;
          const flag = (flags && flags.png) || (flags && flags.svg);
          const commonName = name.common;
          const giniData = gini && Object.values(gini)[0];
          return (
            <Fragment key={index}>
              <div className={styles["country-field"]}>
                <img
                  className={styles["country-flag"]}
                  src={flag}
                  alt={`flag of ${commonName}`}
                />
              </div>
              <div
                className={`${styles["country-field"]} ${styles["country-name"]}`}
              >
                <span>{commonName}</span>
              </div>
              <div className={styles["country-field"]}>
                {population.toLocaleString()}
              </div>
              <div className={styles["country-field"]}>
                {area.toLocaleString()}
              </div>
              <div className={styles["country-field"]}>
                <div className={styles["bar-container"]}>
                  <div
                    className={styles["bar-filler"]}
                    style={{ width: `${giniData ? giniData : 0}%` }}
                  ></div>
                </div>
                <span className={styles["gini-text"]}>
                  {giniData ? `${giniData}%` : "N/A"}
                </span>
              </div>
            </Fragment>
          );
        })}
      </section>
    </div>
  );
}

export default CountriesTable;
