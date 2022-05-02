import styles from "./CountriesTable.module.css";
import { FaSearch } from "react-icons/fa";
import { useRouter } from "next/router";
import Link from "next/link";
import { useInput } from "../../custom-hooks/useInput";
import { useEffect, useState } from "react";

function CountriesTable({ countriesList }) {
  const router = useRouter();
  const [inputValue, inputObj, resetValue] = useInput(
    router.query.search || ""
  );
  const [numOfClicks, setNumOfClicks] = useState(0);
  const [currentOrder, setCurrentOrder] = useState("");
  const [categoryClicked, setCategoryClicked] = useState("");

  function searchByInput(e) {
    e.preventDefault();
    if (inputValue) {
      router.push({ query: { search: inputValue } });
    } else {
      router.push({ query: {} });
    }
  }

  function handleNumberOfClicks() {
    if (numOfClicks < 2) {
      setNumOfClicks((prev) => prev + 1);
    } else {
      setNumOfClicks((prev) => prev - 1);
    }
  }

  function handleCategoryClicked(e) {
    setCategoryClicked(e.target.id);
  }

  function orderArr(arr, direction) {
    if (direction !== 0) {
      arr.sort((a, b) => {
        const {
          name: nameA,
          population: populationA,
          area: areaA,
          gini: giniA,
        } = a;
        const {
          name: nameB,
          population: populationB,
          area: areaB,
          gini: giniB,
        } = b;
        if (categoryClicked === "name") {
          if (direction === 1) {
            return a - b;
          } else {
            return b - a;
          }
        }
      });
    }
    return arr;
  }

  function filterArr(arr) {
    const searchedWord = router.query.search;
    if (searchedWord) {
      const filteredArr = arr.filter((item) => {
        const { name, region, subregion } = item;
        const commonName = name.common;
        return (
          commonName
            .toLowerCase()
            .includes(String(searchedWord.toLowerCase())) ||
          region.toLowerCase().includes(String(searchedWord.toLowerCase())) ||
          subregion.toLowerCase().includes(String(searchedWord.toLowerCase()))
        );
      });
      return filteredArr;
    }
    return arr;
  }

  return (
    <div className={styles["countries-page"]}>
      <section className={styles["search-segment"]}>
        <p>Found 3 countries</p>
        <form onSubmit={searchByInput} className={styles["input-container"]}>
          <div className={styles["icon-container"]}>
            <FaSearch size={18} />
          </div>
          <input
            type="text"
            placeholder="Filter by Name, Region, Subregion"
            {...inputObj}
          />
        </form>
      </section>
      <section className={styles["countries-table"]}>
        <div className={styles["head-row"]}>
          <div className={styles["head-field"]}>&nbsp;</div>
          <div className={`${styles["head-field"]} ${styles["head-name"]}`}>
            <span id="name" onClick={handleCategoryClicked}>
              Name
            </span>
          </div>
          <div
            className={`${styles["head-field"]} ${styles["head-population"]}`}
          >
            <span id="population" onClick={handleCategoryClicked}>
              Population
            </span>
          </div>
          <div className={styles["head-field"]}>
            <span id="area" onClick={handleCategoryClicked}>
              Area (km)
            </span>
          </div>
          <div className={styles["head-field"]}>
            <span id="gini" onClick={handleCategoryClicked}>
              Gini
            </span>
          </div>
        </div>
        {filterArr(countriesList).map((country, index) => {
          const { flags, name, population, area, gini, capital } = country;
          const flag = (flags && flags.png) || (flags && flags.svg);
          const commonName = name.common;
          const giniData = gini && Object.values(gini)[0];
          return (
            <div className={styles["countries-row"]} key={index}>
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
                <Link href={`/${commonName.toLowerCase()}`}>
                  <span>{commonName}</span>
                </Link>
              </div>
              <div
                className={`${styles["country-field"]} ${styles["country-population"]}`}
              >
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
            </div>
          );
        })}
      </section>
    </div>
  );
}

export default CountriesTable;
