import { axiosInstance } from "../../../config";
import { useMutation, useQueryClient } from "react-query";
import { queryConstants } from "../../../constants";

export function signupUser(data) {
  return axiosInstance.post("/auth/signup", data);
}

export default function useSignupMutation() {
  //   const queryClient = useQueryClient();

  return useMutation(signupUser, {
    onSuccess: (data) => {
      console.log(data);
      if (data.data.accessToken)
        localStorage.setItem("accessToken", data.data.accessToken);
    },
    onError: (err) => console.log(err),
  });
}
