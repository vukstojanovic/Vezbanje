import { axiosInstance } from "../../../config";
import { useQuery } from "@tanstack/react-query";
import { queryConstants } from "../../../constants";

export function getMyData() {
  return axiosInstance.get("/user/me");
}

export default function useMyDataQuery() {
  return useQuery([queryConstants.ME], getMyData, {
    onSuccess: (data) => {
      localStorage.setItem("user", data.data.email);
    },
    onError: () => {
      localStorage.removeItem("user");
    },
  });
}
