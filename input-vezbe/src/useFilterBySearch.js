import { useSearchParams } from "react-router-dom";

export function useFilterBySearch(arr) {
  const [searchParams] = useSearchParams();
  return arr.filter((item) => item.includes(searchParams.get("search")));
}
