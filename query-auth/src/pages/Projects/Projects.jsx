import useProjectsQuery from "./api/getProjects";

export default function Projects() {
  const { data, isLoading, isError, error } = useProjectsQuery();

  if (isLoading) return <h1 className="text-xl">Loading ...</h1>;

  if (isError) return <h1 className="text-xl">{error.message}</h1>;

  return <div>Projects</div>;
}
