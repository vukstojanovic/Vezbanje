import { useForm } from "react-hook-form";
import useLoginMutation from "./api/loginUser";
import { Link } from "react-router-dom";

export default function Login() {
  const { register, handleSubmit } = useForm();
  const loginMutation = useLoginMutation();

  return (
    <div className="mx-auto mt-10 bg-gold rounded-md p-5 flex flex-col w-[350px] md:w-[700px] min-h-96">
      <h1 className="text-xl font-bold mb-6 text-center">Login</h1>
      <form onSubmit={handleSubmit((data) => loginMutation.mutate(data))}>
        <div className="mb-7 flex flex-col">
          <label className="mb-3">Email:</label>
          <input
            type="text"
            {...register("email")}
            className="outline-none p-2"
          />
        </div>
        <div className="mb-7 flex flex-col">
          <label className="mb-3">Password:</label>
          <input
            type="password"
            {...register("password")}
            className="outline-none p-2"
          />
        </div>
        <button
          type="submit"
          className="p-3 font-bold bg-black text-gold w-full rounded-md mb-12"
        >
          Submit
        </button>
      </form>
      <p className="mt-auto text-center">
        <Link to="/signup">Don't have an account? Signup for free</Link>
      </p>
    </div>
  );
}
