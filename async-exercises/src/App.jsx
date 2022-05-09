import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  // axios.interceptors.request.use((request) => {
  //   console.log(request);
  // });

  // axios.interceptors.response.use((response) => {
  //   console.log(response);
  // });

  const [number, setNumber] = useState(0);

  function incrementNumber() {
    if (number < 5) {
      setNumber((prev) => prev + 1);
    } else {
      setNumber(0);
    }
  }

  useEffect(() => {
    const myInterval = setInterval(incrementNumber, 1000);
    return () => clearInterval(myInterval);
  }, [number]);

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>{number}</p>
      </header>
    </div>
  );
}

export default App;
