import styles from "./CountriesTable.module.css";
import { FaSearch } from "react-icons/fa";
import { useRouter } from "next/router";
import Link from "next/link";
import { useInput } from "../../custom-hooks/useInput";
import { useState } from "react";
import ArrowComponent from "../ArrowComponent";

function CountriesTable({ countriesList }) {
  const router = useRouter();
  const [inputValue, inputObj, resetValue] = useInput(
    router.query.search || ""
  );
  const [direction, setDirection] = useState(null);
  const [categoryClicked, setCategoryClicked] = useState(null);

  const countries = sortArr(filterArr(countriesList));

  function handleDirection() {
    if (!direction) {
      setDirection("down");
    } else if (direction === "down") {
      setDirection("up");
    } else {
      setDirection(null);
    }
  }

  function handleSort(category) {
    handleDirection();
    setCategoryClicked(category);
  }

  function searchByInput(e) {
    e.preventDefault();
    if (inputValue) {
      router.push({ query: { search: inputValue } });
    } else {
      router.push({ query: {} });
    }
  }

  function sortByDirection(x, y) {
    if (direction === "up") {
      return x > y ? 1 : -1;
    } else if (direction === "down") {
      return x > y ? -1 : 1;
    }
  }

  function sortArr(arr) {
    if (!direction) {
      return arr;
    }
    return [...arr].sort((a, b) => {
      if (categoryClicked === "name") {
        return sortByDirection(
          a[categoryClicked].common,
          b[categoryClicked].common
        );
      } else if (categoryClicked === "gini") {
        const valueA = a[categoryClicked]
          ? Object.values(a[categoryClicked])[0]
          : "";
        const valueB = b[categoryClicked]
          ? Object.values(a[categoryClicked])[0]
          : "";
        return sortByDirection(valueA, valueB);
      } else {
        return sortByDirection(a[categoryClicked], b[categoryClicked]);
      }
    });
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
        <p>Found {countries.length} countries</p>
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
            <span id="name" onClick={() => handleSort("name")}>
              Name
            </span>
            {categoryClicked === "name" && (
              <ArrowComponent direction={direction} />
            )}
          </div>
          <div
            className={`${styles["head-field"]} ${styles["head-population"]}`}
          >
            <span id="population" onClick={() => handleSort("population")}>
              Population
            </span>
            {categoryClicked === "population" && (
              <ArrowComponent direction={direction} />
            )}
          </div>
          <div className={styles["head-field"]}>
            <span id="area" onClick={() => handleSort("area")}>
              Area (km)
            </span>
            {categoryClicked === "area" && (
              <ArrowComponent direction={direction} />
            )}
          </div>
          <div className={styles["head-field"]}>
            <span id="gini" onClick={() => handleSort("gini")}>
              Gini
            </span>
            {categoryClicked === "gini" && (
              <ArrowComponent direction={direction} />
            )}
          </div>
        </div>
        {countries.map((country, index) => {
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
