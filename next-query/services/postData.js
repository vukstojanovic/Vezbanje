import axios from "axios";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export function postUser(userData) {
  return axios.post("http://localhost:4000/users", userData);
}

export function usePostUserMutation() {
  const queryClient = useQueryClient();
  return useMutation(postUser, {
    onSuccess: () => queryClient.invalidateQueries(["users"]),
    onError: () => console.log("error while posting"),
  });
}
