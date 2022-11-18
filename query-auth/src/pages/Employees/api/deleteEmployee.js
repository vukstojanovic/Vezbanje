import { axiosInstance } from "../../../config";
import { useMutation, useQueryClient } from "react-query";
import { queryConstants } from "../../../constants";

async function deleteEmployee(employeeId) {
  return axiosInstance.delete(`/protected/employees/${employeeId}`);
}

export default function useDeleteEmployeeMutation() {
  const queryClient = useQueryClient();

  return useMutation(deleteEmployee, {
    onSuccess: () => {
      queryClient.invalidateQueries([queryConstants.EMPLOYEES]);
    },
    onError: (err) => console.log(err),
  });
}
