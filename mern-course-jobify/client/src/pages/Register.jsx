import Wrapper from "../assets/wrappers/RegisterPage";
import { Logo, FormRow, Alert } from "../components";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { useAppContext } from "../context/appContext";

function Register() {
  //   const {
  //     register,
  //     handleSubmit,
  //     formState: { errors },
  //   } = useForm();

  // function submitForm(data) {
  //     data.isMember = true;
  //     console.log(data);
  //   }

  const initValue = {
    name: "",
    email: "",
    password: "",
    isMember: true,
  };

  const [values, setValues] = useState(initValue);
  const { isLoading, showAlert, handleDisplayAlert, handleClearAlert } =
    useAppContext();

  function handleChange(e) {
    setValues((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    const { name, email, password, isMember } = values;
    if (!email || !password || (!isMember && !name)) {
      console.log(values);
      handleDisplayAlert();
    }
  }

  function toggleMember() {
    setValues((prev) => {
      return { ...prev, isMember: !prev.isMember };
    });
  }

  return (
    <Wrapper className="full-page">
      <form className="form" onSubmit={handleSubmit}>
        <Logo />
        <h3>{values.isMember ? "Login" : "Register"}</h3>
        {showAlert && <Alert />}
        {!values.isMember && (
          <FormRow
            type="text"
            name="name"
            value={values.name}
            handleChange={handleChange}
            labelText="Name"
          />
        )}
        <FormRow
          type="email"
          name="email"
          value={values.email}
          handleChange={handleChange}
          labelText="Email"
        />
        <FormRow
          type="password"
          name="password"
          value={values.password}
          handleChange={handleChange}
          labelText="Password"
        />
        <button type="submit" className="btn btn-block">
          Submit
        </button>
        <p>
          {values.isMember ? "Not a member yet?" : "Already a member?"}
          <button type="button" className="member-btn" onClick={toggleMember}>
            {values.isMember ? "Register" : "Login"}
          </button>
        </p>
      </form>
    </Wrapper>
  );
}

export default Register;
