import "./App.css";
import Select from "react-select";
import { useState } from "react";

function App() {
  const options = [
    { label: "React", value: "React" },
    { label: "Javascript", value: "Javascript" },
    { label: "Html", value: "Html" },
    { label: "Css", value: "Css" },
  ];

  const startValue = "Css";
  const startOption = options.find((el) => el.value === startValue);
  const [selectedOption, setSelectedOption] = useState(null);

  return (
    <div className="App">
      React Select Tutorial
      <Select
        defaultValue={startOption}
        className="custom-select"
        onChange={(value) => setSelectedOption(value)}
        options={options}
      />
      <select name="" id="">
        <option value="raect">React</option>
        <option value="javascript">Javascript</option>
        <option value="html">Html</option>
      </select>
    </div>
  );
}

export default App;
