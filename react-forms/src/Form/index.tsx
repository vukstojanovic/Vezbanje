import styles from "./Form.module.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import ReactStars from "react-rating-stars-component";

const schema = yup.object().shape({
  username: yup.string().required(),
  email: yup.string().email().required(),
  age: yup.number().positive().min(13).integer().required(),
  password: yup
    .string()
    .min(4)
    .max(8)
    .required()
    .matches(/^(?=.*[A-Z])/, "Must contain at least one uppercase character")
    .matches(/^(?=.*[0-9])/, "Must contain at least one number"),
  confirmPassword: yup.string().oneOf([yup.ref("password"), null]),
});

export default function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  // throw Error("ooops!!!");

  function submitForm(data) {
    alert("Submitted successfully, check console log for data object.");
    console.log(data);
  }

  function ratingChange(newRating) {
    console.log(newRating);
  }

  return (
    <div className={styles["form-container"]}>
      <h3>My Form</h3>
      <form onSubmit={handleSubmit(submitForm)}>
        <div className={styles["input-container"]}>
          <input
            type="text"
            name="username"
            placeholder="Username..."
            {...register("username")}
          />
          <p>{errors.username?.message}</p>
        </div>
        <div className={styles["input-container"]}>
          <input
            type="email"
            name="email"
            placeholder="Email..."
            {...register("email")}
          />
          <p>{errors.email?.message}</p>
        </div>
        <div className={styles["input-container"]}>
          <input
            type="number"
            name="age"
            placeholder="Age..."
            {...register("age")}
          />
          <p>{errors.age?.message}</p>
        </div>
        <div className={styles["input-container"]}>
          <input
            type="password"
            name="password"
            placeholder="Password..."
            {...register("password")}
          />
          <p>{errors.password?.message}</p>
        </div>
        <div className={styles["input-container"]}>
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm password..."
            {...register("confirmPassword")}
          />
          <p>{errors.confirmPassword && "Passwords should match!"}</p>
        </div>
        <ReactStars
          count={5}
          size={25}
          activeColor="#ffd700"
          name={"stars"}
          // onChange={ratingChange}
          {...register("stars")}
        />
        <input type="submit" id="submit" />
      </form>
    </div>
  );
}
