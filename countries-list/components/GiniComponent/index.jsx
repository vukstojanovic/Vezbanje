import styles from "./GiniComponent.module.css";

function GiniComponent({ giniData }) {
  return (
    <div className={styles["gini-container"]}>
      <div className={styles["bar-container"]}>
        <div
          className={styles["bar-filler"]}
          style={{ width: `${giniData ? giniData : 0}%` }}
        ></div>
      </div>
      <span className={styles["gini-text"]}>
        {giniData ? `${giniData}%` : "N/A"}
      </span>
    </div>
  );
}

export default GiniComponent;
