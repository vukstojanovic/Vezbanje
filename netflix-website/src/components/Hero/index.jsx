import styles from "./Hero.module.css";
import { BsFillPlayFill } from "react-icons/bs";
import Row from "../Row";
import moviesService from "../../services/moviesService";
import { useQuery } from "react-query";
import { useState, useEffect } from "react";

export default function Hero() {
  const baseUrl = "https://image.tmdb.org/t/p/w500/";

  const { data: movieData, isSuccess } = useQuery(
    "movies",
    moviesService.fetchNewReleases
  );

  const [currentMovie, setCurrentMovie] = useState();

  useEffect(() => {
    setCurrentMovie(
      isSuccess && movieData[Math.floor(Math.random() * movieData.length)]
    );
  }, [isSuccess]);

  return (
    <section
      className={styles.hero}
      style={{
        "background-image": `url(${baseUrl}${currentMovie?.backdrop_path})`,
      }}
    >
      <h1 className={styles.heading}>{currentMovie?.original_name}</h1>
      <p className={styles.description}>
        {currentMovie?.overview?.length > 150
          ? `${currentMovie?.overview?.substr(0, 150)}...`
          : currentMovie?.overview}
      </p>
      <div className={styles.buttons}>
        <button className={styles.play}>
          <BsFillPlayFill size={25} />
          <span>Play</span>
        </button>
        <button className={styles["my-list"]}>My List</button>
      </div>
      <Row
        title="new releases"
        fetchFunction={moviesService.fetchNewReleases}
      />
    </section>
  );
}
