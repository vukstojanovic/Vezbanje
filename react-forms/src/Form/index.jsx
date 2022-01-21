import styles from "./Form.module.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
  username: yup.string().required(),
  email: yup.string().email().required(),
  age: yup.number().positive().integer().required(),
  password: yup.string().min(4).max(10).required(),
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

  function submitForm(data) {
    console.log(data);
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
        <input type="submit" id="submit" />
      </form>
    </div>
  );
}
