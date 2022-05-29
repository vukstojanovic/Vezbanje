import "./App.css";
import Select from "react-select";
import { useState } from "react";
import FormComponent from "./FormComponent";

function App() {
  const options = [
    { label: "Employee", value: "Employee" },
    { label: "Admin", value: "Admin" },
    { label: "Superadmin", value: "Superadmin" },
  ];

  const startValue = "Css";
  const startOption = options.find((el) => el.value === startValue);
  const [selectedOption, setSelectedOption] = useState(null);

  const customStyles = {
    valueContainer: (provided, state) => ({
      ...provided,
      backgroundColor: "#3b3c47",
    }),
    singleValue: (provided, state) => ({
      ...provided,
      color: "white",
    }),
    option: (provided, state) => ({
      ...provided,
      color: "white",
      backgroundColor: "#3b3c47",
    }),
    input: (provided, state) => ({
      ...provided,
      color: "white",
    }),
  };

  return (
    <div className="App">
      React Select Tutorial
      <div className="gray">
        <Select
          defaultValue={startOption}
          styles={customStyles}
          onChange={(value) => setSelectedOption(value)}
          options={options}
        />
      </div>
      <select name="" id="">
        <option value="raect">React</option>
        <option value="javascript">Javascript</option>
        <option value="html">Html</option>
      </select>
      <FormComponent />
    </div>
  );
}

export default App;
