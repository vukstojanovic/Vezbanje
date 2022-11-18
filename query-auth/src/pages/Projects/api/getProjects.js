import { axiosInstance } from "../../../config";
import { useQuery } from "react-query";
import { queryConstants } from "../../../constants";

async function getProjects() {
  return axiosInstance.get("/protected/projects");
}

export default function useProjectsQuery() {
  return useQuery([queryConstants.PROJECTS], getProjects);
}
