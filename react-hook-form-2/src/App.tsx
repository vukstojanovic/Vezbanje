import { useForm, Controller } from "react-hook-form";
import "./App.css";
import { FormData } from "./types";
import Select from "react-select";

function App() {
  const options = [
    { label: "blue", value: "blue" },
    { label: "red", value: "red" },
    { label: "purple", value: "purple" },
  ];

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<FormData>({
    defaultValues: {
      colors: ["red", "blue"],
    },
  });

  function submitData(data: FormData) {
    console.log(data);
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit(submitData)}>
        <p>
          <label>Name: </label> <input type="text" {...register("name")} />
        </p>
        <p>
          <label>Password: </label>{" "}
          <input type="text" {...register("password")} />
        </p>
        <p>
          <label>Confirm password: </label>{" "}
          <input type="text" {...register("confirm_password")} />
        </p>
        <Controller
          name="colors"
          control={control}
          render={({ field: { onChange, value } }) => (
            <Select
              isMulti
              options={options}
              onChange={(selectedValue) =>
                onChange(selectedValue.map((item) => item.value))
              }
              defaultValue={options.filter((item) =>
                value.includes(item.value)
              )}
            />
          )}
        />
        <input type="submit" value="Submit" />
      </form>
      <Select
        isMulti
        options={options}
        onChange={(value) => console.log(value)}
        value={[options[0]]}
      />
    </div>
  );
}

export default App;
