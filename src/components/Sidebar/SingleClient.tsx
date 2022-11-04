import React from "react";
import styles from "./SingleClient.module.css";

type Props = {
  photo: string;
  name: string;
  text: string;
};

const SingleClient: React.FC<Props> = ({ photo, name, text }) => {
  return (
    <div className={styles["client-review"]}>
      <div className={styles["photo-border-wrap"]}>
        <div
          className={styles["client-photo"]}
          style={{ backgroundImage: `url(${photo})` }}
        />
      </div>
      <h3 className={styles["client-name"]}>{name}</h3>
      <p className={styles["client-review-text"]}>{text}</p>
    </div>
  );
};

export default SingleClient;
