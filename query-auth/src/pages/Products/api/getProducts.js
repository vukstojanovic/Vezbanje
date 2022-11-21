import { axiosInstance } from "../../../config";
import { useQuery } from "@tanstack/react-query";
import { queryConstants } from "../../../constants";

async function getProducts() {
  return axiosInstance.get("/protected/products");
}

export default function useProductsQuery() {
  return useQuery([queryConstants.PRODUCTS], getProducts);
}
