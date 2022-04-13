import { useRouter } from "next/router";

export default function NestedNewsPage() {
  const router = useRouter();
  console.log(router);
  return <h1>Another page at news endpoint {router.query.newsId}</h1>;
}
