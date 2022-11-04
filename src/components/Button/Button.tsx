import React from "react";

import styles from "./Button.module.css";

type Props = {
  children: any;
  onBtnClick?: () => void;
};

const Button: React.FC<Props> = ({ children, onBtnClick }) => {
  return (
    <button className={styles.btn} onClick={onBtnClick}>
      {children}
    </button>
  );
};

export default Button;
