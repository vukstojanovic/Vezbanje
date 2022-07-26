import { useRouter } from "next/router";
import { useEffect } from "react";
import { useNextContext } from "../context";

export default function About() {
  const { role } = useNextContext();
  const allowedRoles = ["admin"];
  const router = useRouter();

  useEffect(() => {
    if (!allowedRoles.includes(role)) {
      router.push("/");
    }
  }, []);

  return <h1>About page!!!!!!</h1>;
}

// export async function getStaticProps() {
//   return {
//     props: {},
//   };
// }
