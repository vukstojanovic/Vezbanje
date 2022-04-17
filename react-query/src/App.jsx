import "./App.css";
import Characters from "./components/Characters";
import { QueryClientProvider, QueryClient } from "react-query";

function App() {
  const charactersQueryClient = new QueryClient();

  return (
    <div className="App">
      <QueryClientProvider client={charactersQueryClient}>
        <Characters />
      </QueryClientProvider>
    </div>
  );
}

export default App;
