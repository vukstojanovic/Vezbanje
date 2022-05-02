import styles from "./CountryContent.module.css";
import GeneralData from "../GeneralData";
import DetailsData from "../DetailsData";

function CountryContent({ countryData, borderCountriesData }) {
  const {
    flags,
    name,
    population,
    area,
    gini,
    capital,
    subregion,
    languages,
    currencies,
    region,
  } = countryData;

  const flag = (flags && flags.png) || (flags && flags.svg);
  const commonName = name.common;
  const nativeName = Object.values(name.nativeName)[0].common;
  const giniData = gini && Object.values(gini)[0];
  const capitalCities = capital && capital.map((city) => city);
  const allLanguages = Object.values(languages);
  const allCurrencies = Object.values(currencies).map((curr) => {
    if (curr.symbol) {
      return `${curr.name} (${curr.symbol})`;
    }
    return curr.name;
  });
  const propsForGeneralData = {
    flag,
    commonName,
    population,
    area,
    region,
  };
  const propsForDetailsData = {
    capitalCities,
    subregion,
    allLanguages,
    allCurrencies,
    giniData,
    nativeName,
    borderCountriesData,
  };

  return (
    <div className={styles["country-page"]}>
      <GeneralData {...propsForGeneralData} />
      <DetailsData {...propsForDetailsData} />
    </div>
  );
}

export default CountryContent;
