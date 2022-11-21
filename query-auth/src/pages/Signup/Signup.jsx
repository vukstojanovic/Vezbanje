import { useForm } from "react-hook-form";
import useSignupMutation from "./api/signupUser";
import { Link } from "react-router-dom";
import { useAuth } from "../../providers/authProvider";

export default function Signup() {
  const { register, handleSubmit } = useForm();
  const signupMutation = useSignupMutation();
  // const { register: registerUser } = useAuth();

  return (
    <div className="mx-auto mt-10 bg-gold rounded-md p-5 flex flex-col w-[350px] md:w-[700px] min-h-96">
      <h1 className="text-xl font-bold mb-6 text-center">Signup</h1>
      <form onSubmit={handleSubmit((data) => signupMutation.mutate(data))}>
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
        <Link to="/login">Already have an account? Login</Link>
      </p>
    </div>
  );
}
