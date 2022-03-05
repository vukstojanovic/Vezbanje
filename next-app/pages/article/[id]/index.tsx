import { useRouter } from "next/router";

export default function Article() {
  const router = useRouter();
  const { id } = router.query;
  return <h2>This is article {id}</h2>;
}
