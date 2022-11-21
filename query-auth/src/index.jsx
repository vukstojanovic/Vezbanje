import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import {
  BrowserRouter,
  unstable_HistoryRouter as HistoryRouter,
} from "react-router-dom";
// import { createBrowserHistory } from "history";
import { queryConfig } from "./query/index";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AuthProvider } from "./providers/authProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));

const queryClient = new QueryClient({ defaultOptions: queryConfig });
// export const history = createBrowserHistory();

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </BrowserRouter>
  </React.StrictMode>
);
