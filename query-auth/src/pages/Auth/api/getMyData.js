import { axiosInstance } from "../../../config";
import { useQuery } from "@tanstack/react-query";
import { queryConstants } from "../../../constants";

export function getMyData() {
  return axiosInstance.get("/user/me");
}

export default function useMyDataQuery() {
  return useQuery([queryConstants.ME], getMyData);
}
