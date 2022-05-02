import CountryContent from "../../components/CountryContent";

export default function CountryPage({ countryData, borderCountriesData }) {
  console.log(countryData);
  return (
    <CountryContent
      countryData={countryData}
      borderCountriesData={borderCountriesData}
    />
  );
}

export async function getServerSideProps(context) {
  const response = await fetch(
    `https://restcountries.com/v3.1/name/${context.query.countryName}`
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
    },
  };
}
