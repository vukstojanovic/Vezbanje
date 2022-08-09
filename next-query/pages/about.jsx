import { useRouter } from "next/router";

export default function About({ number }) {
  return (
    <div>
      <h1>About page</h1>
      <p>Just one number {number}</p>
    </div>
  );
}

export async function getStaticProps() {
  return {
    props: {
      number: 1,
    },
  };
}
