import styles from "../../styles/ArticleList.module.css";
import ArticleItem from "../articleItem";

export default function ArticleList({ articles }: any) {
  return (
    <div className={styles.articleList}>
      {articles.map((article: any) => (
        <ArticleItem key={article.id} article={article} />
      ))}
    </div>
  );
}
