import "./App.css";
import Counter from "./Counter";
import Elements from "./Elements";

function App() {
  return (
    <div className="App">
      <Counter initialValue={0} />
      <Elements />
    </div>
  );
}

export default App;
