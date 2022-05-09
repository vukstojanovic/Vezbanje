import styles from "./Row.module.css";
import { useQuery } from "react-query";

export default function Row({ title, fetchFunction }) {
  const { data: moviesData, isSuccess } = useQuery(title, fetchFunction);

  const baseUrl = "https://image.tmdb.org/t/p/w500/";

  return (
    <div className={styles.row}>
      <h2 className={styles.title}>{title}</h2>
      {isSuccess && (
        <div className={styles["movie-container"]}>
          {moviesData.map((movie) => {
            const { id, backdrop_path, original_title } = movie;
            return (
              <div key={id} className={styles["img-container"]}>
                <img src={`${baseUrl}${backdrop_path}`} alt={original_title} />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
