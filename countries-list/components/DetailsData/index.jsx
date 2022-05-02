import styles from "./DetailsData.module.css";
import GiniComponent from "../GiniComponent";
import Link from "next/link";

function DetailsData({
  capitalCities,
  subregion,
  allLanguages,
  allCurrencies,
  giniData,
  nativeName,
  borderCountriesData,
}) {
  console.log(borderCountriesData);
  const allCapitalsJoined = capitalCities.join(", ");
  const allLanguagesJoined = allLanguages.join(", ");
  const allCurrenciesJoined = allCurrencies.join(", ");
  return (
    <div className={styles["details-data"]}>
      <h3>Details</h3>
      <section className={styles["country-info"]}>
        <div className={styles["single-info"]}>
          <span className={styles["description"]}>Capital</span>
          <span className={styles["value"]}>{allCapitalsJoined}</span>
        </div>
        <div className={styles["single-info"]}>
          <span className={styles["description"]}>Subregion</span>
          <span className={styles["value"]}>{subregion}</span>
        </div>
        <div className={styles["single-info"]}>
          <span className={styles["description"]}>Languages</span>
          <span className={styles["value"]}>{allLanguagesJoined}</span>
        </div>
        <div className={styles["single-info"]}>
          <span className={styles["description"]}>Currencies</span>
          <span className={styles["value"]}>{allCurrenciesJoined}</span>
        </div>
        <div className={styles["single-info"]}>
          <span className={styles["description"]}>Native name</span>
          <span className={styles["value"]}>{nativeName}</span>
        </div>
        <div className={styles["single-info"]}>
          <span className={styles["description"]}>Gini</span>
          <span className={styles["value"]}>
            <GiniComponent giniData={giniData} />
          </span>
        </div>
      </section>
      <section className={styles["neighbour-info"]}>
        <p>Neighbouring Countries</p>
        <div className={styles["neighbour-countries"]}>
          {borderCountriesData.map((country) => {
            const { name, flag } = country;
            return (
              <Link href={`/${name.toLowerCase()}`}>
                <div className={styles["single-neighbour"]}>
                  <div className={styles["img-container"]}>
                    <img src={flag} alt={`flag of ${name}`} />
                  </div>
                  <span>{name}</span>
                </div>
              </Link>
            );
          })}
        </div>
      </section>
    </div>
  );
}

export default DetailsData;
