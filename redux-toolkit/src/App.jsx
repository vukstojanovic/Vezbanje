import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  incrementByAmount,
  countSelector,
} from "./redux/reducers/counterReducer";

function App() {
  const count = useSelector(countSelector);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>The count is: {count}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(incrementByAmount(12))}>
        Increment by 12
      </button>
    </div>
  );
}

export default App;
