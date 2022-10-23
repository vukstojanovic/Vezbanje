import { axiosInstance } from "../../../config";
import { useQuery } from "@tanstack/react-query";
import { queryConstants } from "../../../constants";

async function getEmployees() {
  return axiosInstance.get("/protected/employees");
}

export default function useEmployeesQuery() {
  return useQuery([queryConstants.EMPLOYEES], getEmployees);
}
