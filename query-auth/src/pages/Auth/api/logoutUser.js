import { axiosInstance } from "../../../config";
import { useMutation, useQueryClient } from "react-query";
import { queryConstants } from "../../../constants";

export function deleteAccessToken() {
  const refreshToken = localStorage.getItem("refreshToken");
  return axiosInstance.delete("/auth/logout", { refreshToken });
}

export default function useDeleteAccessTokenMutation() {
  const queryClient = useQueryClient();

  return useMutation(deleteAccessToken, {
    onSuccess: () => queryClient.invalidateQueries([queryConstants.ME]),
    onError: (err) => console.log(err),
  });
}
