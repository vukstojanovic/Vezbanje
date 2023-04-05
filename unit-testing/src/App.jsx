import "./App.css";
import Counter from "./Counter";
import Elements from "./Elements";
import Async from "./Async";

function App() {
  return (
    <div className="App">
      <Counter initialValue={0} />
      <Elements />
      <Async />
    </div>
  );
}

export default App;
