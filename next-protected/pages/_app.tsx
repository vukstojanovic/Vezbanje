import "../styles/globals.css";
import type { AppProps } from "next/app";
import Nav from "../components/Nav";
import PageContainer from "../components/PageContainer";

type WithRequireAuth = AppProps & {
  requireAuth?: boolean;
};

function MyApp({ Component, pageProps }: WithRequireAuth) {
  return (
    <>
      <Nav />
      <PageContainer>
        {Component.requireAuth ? (
          localStorage.getItem("role") !== "User" ? (
            <h1>Protected!!!!!</h1>
          ) : (
            <Component {...pageProps} />
          )
        ) : (
          <Component {...pageProps} />
        )}
      </PageContainer>
    </>
  );
}

export default MyApp;
