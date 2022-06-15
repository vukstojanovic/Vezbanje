import SearchComponent from "../SearchComponent";
import ListComponent from "../ListComponent";
import { useSearchParams } from "react-router-dom";

function PageComponent() {
  const [searchParams, setSearchParams] = useSearchParams();

  return (
    <>
      <SearchComponent />
      <ListComponent />
    </>
  );
}

export default PageComponent;
