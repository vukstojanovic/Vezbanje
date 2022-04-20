import styles from "../../styles/Feed.module.css";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Feed({ articles, pageNumber }) {
  console.log(articles, pageNumber);
  const router = useRouter();

  function goToNext() {
    if (pageNumber !== 5) {
      router.push(`/feed/${pageNumber + 1}`);
    }
  }

  function goToPrev() {
    if (pageNumber !== 1) {
      router.push(`/feed/${pageNumber - 1}`);
    }
  }

  return (
    <div className={styles["main"]}>
      <div className={styles["articles-segment"]}>
        {articles.map((singleArticle, index) => {
          const { title, description, urlToImage, url } = singleArticle;
          return (
            <article key={index} className={styles["article"]}>
              <h1>
                <Link href={url}>{title}</Link>
              </h1>
              <p>{description}</p>
              <img src={urlToImage} alt="articleImage" />
            </article>
          );
        })}
      </div>
      <div className={styles["pagination-segment"]}>
        <button
          className={pageNumber === 1 && styles["disabled"]}
          onClick={goToPrev}
        >
          Previous Page
        </button>
        <span>#{pageNumber}</span>
        <button
          className={pageNumber === 5 && styles["disabled"]}
          onClick={goToNext}
        >
          Next Page
        </button>
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  const pageNumber = context.query.feedId;

  if (!pageNumber || pageNumber < 1 || pageNumber > 5) {
    return {
      props: {
        articles: [],
        pageNumber: 1,
      },
    };
  }

  const response = await fetch(
    `https://newsapi.org/v2/top-headlines?country=us&pageSize=5&page=${pageNumber}`,
    { headers: { Authorization: `Bearer ${process.env.NEXT_PUBLIC_NEWS_KEY}` } }
  );
  const data = await response.json();
  const { articles } = data;

  return {
    props: {
      pageNumber: Number(pageNumber),
      articles,
    },
  };
}
