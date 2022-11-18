import { axiosInstance } from "../../../config";
import { useQuery, useQueryClient } from "react-query";
import { queryConstants } from "../../../constants";

async function getEmployees() {
  return axiosInstance.get("/protected/employees");
}

export default function useEmployeesQuery() {
  const queryClient = useQueryClient();

  return useQuery([queryConstants.EMPLOYEES], getEmployees);
}
