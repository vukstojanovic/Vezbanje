import CountryContent from "../../components/CountryContent";
import Head from "next/head";

export default function CountryPage({
  countryData,
  borderCountriesData,
  countryName,
}) {
  console.log(countryData);
  return (
    <>
      <Head>
        <title>{countryName}</title>
      </Head>
      <CountryContent
        countryData={countryData}
        borderCountriesData={borderCountriesData}
      />
    </>
  );
}

export async function getStaticPaths() {
  const response = await fetch(`https://restcountries.com/v3.1/all`);
  const countriesData = await response.json();

  return {
    fallback: false,
    paths: countriesData.map((country, index) => {
      const commonName = country.name.common.toLowerCase();
      return {
        params: {
          countryName: commonName,
        },
      };
    }),
  };
}

export async function getStaticProps(context) {
  const response = await fetch(
    `https://restcountries.com/v3.1/name/${context.params.countryName}`
  );
  const countryData = await response.json();
  const borderCountriesList = countryData[0].borders
    ? countryData[0].borders
    : [];
  const borderCountriesData = await Promise.all(
    borderCountriesList.map(async (country) => {
      const res = await fetch(
        `https://restcountries.com/v3.1/alpha/${country}`
      );
      const borderData = await res.json();
      const name = borderData[0].name.common;
      const flag = borderData[0].flags.png || borderData[0].flags.svg;
      return { name, flag };
    })
  );

  return {
    props: {
      countryData: countryData[0],
      borderCountriesData,
      countryName:
        context.params.countryName[0].toUpperCase() +
        context.params.countryName.slice(1),
    },
  };
}
