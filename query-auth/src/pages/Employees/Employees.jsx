import useEmployeesQuery from "./api/getEmployees";
import SingleEmployee from "../../components/SingleEmployee/SingleEmployee";
import { useForm } from "react-hook-form";
import usePostEmployeeMutation from "./api/postEmployee";

export default function Employees() {
  const { data, isLoading, isError, error } = useEmployeesQuery();
  const { register, handleSubmit } = useForm();
  const postEmployeeMutation = usePostEmployeeMutation();

  if (isLoading) return <h1 className="text-xl">Loading ...</h1>;

  if (isError) return <h1 className="text-xl">{error.message}</h1>;

  return (
    <>
      {data && (
        <div>
          <form
            className="flex space-x-3 items-center mb-6"
            onSubmit={handleSubmit((data) => postEmployeeMutation.mutate(data))}
          >
            <input
              type="text"
              className="outline-none border-violet-800 border-2 p-2 rounded-md"
              {...register("name")}
            />
            <button
              className="bg-violet-800 text-gray-300 font-bold px-3 py-2 rounded-md"
              type="submit"
            >
              Add employee
            </button>
          </form>
          {data.data.map((employee) => {
            const { name, id } = employee;
            return <SingleEmployee key={id} name={name} id={id} />;
          })}
        </div>
      )}
    </>
  );
}
