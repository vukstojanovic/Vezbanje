import "./App.css";
import People from "./components/People";
import Input from "./components/Input";
import { useEffect } from "react";
import { useThemeStore } from "./store";

function App() {
  const toggleDarkMode = useThemeStore((state) => state.toggleDarkMode);
  const dark = useThemeStore((state) => state.dark);

  useEffect(() => {
    if (dark) {
      document.querySelector("body").classList.add("dark");
    } else {
      document.querySelector("body").classList.remove("dark");
    }
  }, [dark]);

  return (
    <div className="App">
      <p>People</p>
      <People />
      <Input />
      <button onClick={toggleDarkMode}>Toggle dark mode</button>
    </div>
  );
}

export default App;
