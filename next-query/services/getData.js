import axios from "axios";
import { useQuery } from "@tanstack/react-query";

export function getUsers() {
  return axios.get("http://localhost:4000/users");
}

export function useGetUsersQuery() {
  return useQuery(["users"], getUsers);
}
