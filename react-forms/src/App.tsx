import "./App.css";
import Form from "./Form";
import ErrorBoundary from "./ErrorBoundary";

function App() {
  return (
    <div className="App">
      <ErrorBoundary>
        <Form />
      </ErrorBoundary>
    </div>
  );
}

export default App;
