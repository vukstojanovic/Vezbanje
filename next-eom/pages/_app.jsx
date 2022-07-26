import "../styles/globals.css";
import Layout from "../components/layout/index";
import {
  QueryClient,
  QueryClientProvider,
  Hydrate,
} from "@tanstack/react-query";
import { NextContextProvider } from "../context";

function MyApp({ Component, pageProps }) {
  const newClient = new QueryClient();

  return (
    <NextContextProvider>
      <QueryClientProvider client={newClient}>
        {/* <Hydrate state={pageProps.dehydratedState}> */}
        <Layout>
          <Component {...pageProps} />
        </Layout>
        {/* </Hydrate> */}
      </QueryClientProvider>
    </NextContextProvider>
  );
}

export default MyApp;
