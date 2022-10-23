import useProductsQuery from "./api/getProducts";

export default function Products() {
  const { data, isLoading, isError, error } = useProductsQuery();

  if (isLoading) return <h1 className="text-xl">Loading ...</h1>;

  if (isError) return <h1 className="text-xl">{error.message}</h1>;

  return <div>Products</div>;
}
