import { axiosInstance } from "../../../config";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { queryConstants } from "../../../constants";

async function postEmployee(newEmployee) {
  return axiosInstance.post("/protected/employees", newEmployee);
}

export default function usePostEmployeeMutation() {
  const queryClient = useQueryClient();

  return useMutation(postEmployee, {
    onSuccess: () => {
      queryClient.invalidateQueries([queryConstants.EMPLOYEES]);
    },
    onError: (err) => console.log(err),
  });
}
