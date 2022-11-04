import React from "react";

import styles from "./Partner.module.css";

type Props = {
  photo: string;
};

const Partner: React.FC<Props> = ({ photo }) => {
  return (
    <div className={styles["photo-border-wrap"]}>
      <div
        className={styles["client-photo"]}
        style={{ backgroundImage: `url(${photo})` }}
      />
    </div>
  );
};

export default Partner;
