import styles from "./Rows.module.css";
import Row from "../Row";
import moviesService from "../../services/moviesService";

export default function Rows() {
  return (
    <section className={styles.rows}>
      <Row title="trending now" fetchFunction={moviesService.fetchTrending} />
      <Row title="top rated" fetchFunction={moviesService.fetchTopRated} />
      <Row
        title="action movies"
        fetchFunction={moviesService.fetchActionMovies}
      />
      <Row
        title="comedy movies"
        fetchFunction={moviesService.fetchComedyMovies}
      />
      <Row
        title="horror movies"
        fetchFunction={moviesService.fetchHorrorMovies}
      />
      <Row
        title="romance movies"
        fetchFunction={moviesService.fetchRomanceMovies}
      />
      <Row
        title="documentaries"
        fetchFunction={moviesService.fetchDocumentaries}
      />
    </section>
  );
}
