import "../styles/globals.css";
import { QueryClient, QueryClientProvider } from "react-query";

function MyApp({ Component, pageProps }) {
  const newClient = new QueryClient();

  return (
    <QueryClientProvider client={newClient}>
      <Component {...pageProps} />
    </QueryClientProvider>
  );
}

export default MyApp;
