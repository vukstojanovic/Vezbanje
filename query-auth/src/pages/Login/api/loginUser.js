import { axiosInstance } from "../../../config";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { queryConstants } from "../../../constants";

export function loginUser(data) {
  return axiosInstance.post("/auth/login", data);
}

export default function useLoginMutation() {
  const queryClient = useQueryClient();

  return useMutation(loginUser, {
    onSuccess: (data) => {
      localStorage.setItem("accessToken", data.data.accessToken);
      localStorage.setItem("refreshToken", data.data.refreshToken);
      queryClient.invalidateQueries([queryConstants.ME]);
    },
    onError: (err) => console.log(err),
  });
}
