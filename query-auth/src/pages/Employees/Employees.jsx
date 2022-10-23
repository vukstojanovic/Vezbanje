import useEmployeesQuery from "./api/getEmployees";

export default function Employees() {
  const { data, isLoading, isError, error } = useEmployeesQuery();

  if (isLoading) return <h1 className="text-xl">Loading ...</h1>;

  if (isError) return <h1 className="text-xl">{error.message}</h1>;

  return <div>Employees</div>;
}
