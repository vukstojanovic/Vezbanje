import "../styles/globals.css";
import Layout from "../components/layout/index";
import {
  QueryClient,
  QueryClientProvider,
  Hydrate,
} from "@tanstack/react-query";

function MyApp({ Component, pageProps }) {
  const newClient = new QueryClient();

  return (
    <QueryClientProvider client={newClient}>
      {/* <Hydrate state={pageProps.dehydratedState}> */}
      <Layout>
        <Component {...pageProps} />
      </Layout>
      {/* </Hydrate> */}
    </QueryClientProvider>
  );
}

export default MyApp;
