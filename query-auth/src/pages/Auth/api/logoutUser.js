import { axiosInstance } from "../../../config";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { queryConstants } from "../../../constants";

export function deleteAccessToken() {
  const refreshToken = localStorage.getItem("refreshToken");
  return axiosInstance.delete("/auth/logout", { refreshToken });
}

export default function useDeleteAccessTokenMutation() {
  const queryClient = useQueryClient();

  return useMutation(deleteAccessToken, {
    onSuccess: () => {
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
      queryClient.invalidateQueries([queryConstants.ME]);
    },
    onError: (err) => console.log(err),
  });
}
