import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Select from "react-select";

function FormComponent() {
  //   const {
  //     register,
  //     watch,
  //     handleSubmit,
  //     formState: { errors },
  //   } = useForm();

  const schema = yup.object().shape({
    firstName: yup.string().min(3).max(10).required(),
    lastName: yup.string().min(3).max(10).required(),
    age: yup.number().min(18).max(35),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  function submitData(data) {
    console.log(data);
  }

  const options = [
    { label: "red", value: "red" },
    { label: "blue", value: "blue" },
    { label: "green", value: "green" },
  ];

  return (
    // <form onSubmit={handleSubmit(submitData)}>
    //   <label htmlFor="firstName">First Name:</label>
    //   <input
    //     {...register("firstName", { required: "First name is required" })}
    //     type="text"
    //     id="firstName"
    //   />
    //   {errors.firstName && <p>{errors.firstName.message}</p>}

    //   <label htmlFor="lastName">Last Name:</label>
    //   <input
    //     {...register("lastName", {
    //       required: { value: true, message: "Last name is required" },
    //       maxLength: { value: 4, message: "Maximum 4 characters" },
    //     })}
    //     type="text"
    //     id="lastName"
    //   />
    //   {errors.lastName && <p>{errors.lastName.message}</p>}

    //   <label htmlFor="age">Age:</label>
    //   <input
    //     {...register("age", { valueAsNumber: true })}
    //     type="number"
    //     id="age"
    //   />

    //   <select {...register("gender")} name="gender" id="gender">
    //     <option value="male">Male</option>
    //     <option value="female">Female</option>
    //   </select>

    //   <label htmlFor="developer">Are you a developer?</label>
    //   <input
    //     {...register("developer")}
    //     type="checkbox"
    //     value="yes"
    //     id="developer"
    //   />

    //   <button>Submit data</button>
    // </form>
    <form onSubmit={handleSubmit(submitData)}>
      <label htmlFor="firstName">First Name:</label>
      <input {...register("firstName")} type="text" id="firstName" />
      {errors.firstName && <p>{errors.firstName.message}</p>}

      <label htmlFor="lastName">Last Name:</label>
      <input {...register("lastName")} type="text" id="lastName" />
      {errors.lastName && <p>{errors.lastName.message}</p>}

      <label htmlFor="age">Age:</label>
      <input {...register("age")} type="number" id="age" />
      <p>{errors.age?.message}</p>

      {/* <Select {...register("gender")} name="gender" options={options} /> */}

      <div className="select-wrapper">
        <select
          className="my-select"
          {...register("gender")}
          name="gender"
          id="gender"
        >
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
        <span className="arrow"></span>
      </div>

      <label htmlFor="developer">Are you a developer?</label>
      <input
        {...register("developer")}
        type="checkbox"
        value="yes"
        id="developer"
      />

      <Select options={options} isMulti />

      <button>Submit data</button>
    </form>
  );
}

export default FormComponent;
