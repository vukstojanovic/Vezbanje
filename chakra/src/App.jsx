import logo from "./logo.svg";
import "./App.css";
import SomeChild from "./SomeChild";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <SomeChild />
      </header>
    </div>
  );
}

export default App;
