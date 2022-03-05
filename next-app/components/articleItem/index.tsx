import styles from "../../styles/ArticleItem.module.css";
import Link from "next/link";

export default function ArticleItem({ article }: any) {
  return (
    <div className={styles.article}>
      <Link href="/article/[id]" as={`/article/${article.id}`}>
        <div>
          <h3>{article.title}</h3>
          <p>{article.body}</p>
        </div>
      </Link>
    </div>
  );
}
