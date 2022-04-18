import { useParams } from "react-router";

function ProductDetail() {
  const { id } = useParams();
  return (
    <div>
      <h2>Product Detail number {id}</h2>
    </div>
  );
}

export default ProductDetail;
