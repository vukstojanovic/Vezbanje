import {
  BrowserRouter,
  unstable_HistoryRouter as HistoryRouter,
} from "react-router-dom";
import { createBrowserHistory } from "history";
import { queryConfig } from "../query/index";
import { QueryClient, QueryClientProvider } from "react-query";
import { AuthProvider } from "./authProvider";

const queryClient = new QueryClient({ defaultOptions: queryConfig });
export const history = createBrowserHistory();

export default function AppProvider({ children }) {
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </BrowserRouter>
  );
}
