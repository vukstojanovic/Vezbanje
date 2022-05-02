import Head from "next/head";
import styles from "../styles/Home.module.css";
import CountriesTable from "../components/CountriesTable";

export default function Home({ countriesList }) {
  return (
    <div className={styles["home-container"]}>
      <CountriesTable countriesList={countriesList} />
    </div>
  );
}

export async function getStaticProps() {
  const response = await fetch(`https://restcountries.com/v3.1/region/europe`);
  const countriesList = await response.json();

  return {
    props: {
      countriesList,
    },
  };
}
