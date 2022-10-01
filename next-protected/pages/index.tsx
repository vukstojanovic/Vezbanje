import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Home page</h1>
      <p>Some home page text</p>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque ad sit
        inventore eius officiis minima magnam ducimus? Minima necessitatibus
        beatae, eligendi debitis, officia corrupti maxime ipsum fuga eveniet
        odio molestiae. Hic placeat ipsum veniam reprehenderit voluptatem
        repellat, necessitatibus dolorum porro alias eligendi sint accusamus eos
        error atque asperiores quis voluptatum, delectus similique impedit quae
        fugiat! Quae distinctio id quaerat repellendus. Dolores id quibusdam
        veritatis at. Repudiandae maxime quas, repellendus nam necessitatibus
        veritatis. Laborum culpa voluptatem sequi aliquam repellendus saepe fuga
        aspernatur provident incidunt aut consequuntur pariatur rem, quia
        consectetur ducimus!
      </p>
      <button onClick={() => localStorage.setItem("role", "User")}>
        Login
      </button>
    </>
  );
};

export default Home;
