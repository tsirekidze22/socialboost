import styles from "./ProgressBar.module.css";

const ProgressBar = () => {
  return (
    <div className={styles["progress-bar"]}>
      <div className={styles.bullets}>
        <div className={styles["bullet-one"]} />
        <div className={styles["line"]} />
        <div className={styles["bullet-two"]} />
      </div>
      <div className={styles["progress-text"]}>
        <p className={styles.signup}>Sign Up</p>
        <p className={styles.targeting}>Targeting</p>
      </div>
    </div>
  );
};

export default ProgressBar;
