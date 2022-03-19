import { useRouter } from "next/router";
import { GetServerSideProps } from "next";
import Link from "next/link";

export default function Article({ article }: any) {
  // const router = useRouter();
  // const { id } = router.query;
  return (
    <>
      <h2>This is an article number: {article.id}</h2>
      <p>{article.body}</p>
      <Link href="/">Go back</Link>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${context?.params?.id}`
  );
  const article = await res.json();

  return {
    props: { article },
  };
};
