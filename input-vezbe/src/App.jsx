import "./App.css";
import Select from "react-select";
import { useState } from "react";
import FormComponent from "./FormComponent";
import PageComponent from "./PageComponent";
import { BrowserRouter, Routes, Route } from "react-router-dom";

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
        <option value="react">React</option>
        <option value="javascript">Javascript</option>
        <option value="html">Html</option>
      </select>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PageComponent />} />
          {/* <FormComponent /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
