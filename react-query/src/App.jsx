import "./App.css";
import Characters from "./components/Characters";
import TodoPage from "./components/TodoPage";
import MultipleFetch from "./components/MultipleFetch";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

function App() {
  const charactersQueryClient = new QueryClient();

  return (
    <div className="App">
      <QueryClientProvider client={charactersQueryClient}>
        {/* <Characters /> */}
        {/* <TodoPage /> */}
        <MultipleFetch />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </div>
  );
}

export default App;
