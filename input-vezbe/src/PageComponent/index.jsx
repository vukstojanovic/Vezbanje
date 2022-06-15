import SearchComponent from "../SearchComponent";
import ListComponent from "../ListComponent";
import { useSearchParams, useLocation } from "react-router-dom";
import { useEffect } from "react";

function PageComponent() {
  const [searchParams, setSearchParams] = useSearchParams({});
  const location = useLocation();

  useEffect(() => {
    console.log(location);
    console.log(searchParams);
  }, []);

  return (
    <>
      <SearchComponent />
      <ListComponent />
    </>
  );
}

export default PageComponent;
