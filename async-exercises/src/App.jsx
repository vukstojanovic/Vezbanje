import "./App.css";
import axios from "axios";

function App() {
  axios.interceptors.request.use((request) => {
    console.log(request);
  });

  axios.interceptors.response.use((response) => {
    console.log(response);
  });

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header>
    </div>
  );
}

export default App;
