import useProductsQuery from "./api/getProducts";
import SingleProduct from "../../components/SingleProduct/SingleProduct";

export default function Products() {
  const { data, isLoading, isError, error } = useProductsQuery();

  if (isLoading) return <h1 className="text-xl">Loading ...</h1>;

  if (isError) return <h1 className="text-xl">{error.message}</h1>;

  return (
    <div>
      {data &&
        data.data.map((product) => {
          const { name, id } = product;
          return <SingleProduct key={id} name={name} />;
        })}
    </div>
  );
}
