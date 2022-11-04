import Button from "../Button/Button";

import checkmark from "../../assets/CheckMark.svg";
import styles from "./Modal.module.css";

const Modal = () => {
  return (
    <div className={styles["modal-wrapper"]}>
      <div className={styles.modal}>
        <div className={styles.checkmarkbg}>
          <img src={checkmark} alt="checkmark" />
        </div>
        <h1 className={styles["modal-title"]}>
          Thanks for completing this form!
        </h1>
        <h3 className={styles["modal-subtitle"]}>
          Contact your personal manager
        </h3>
        <p className={styles["modal-desc"]}>
          Our 24/7 Onboarding Team are connecting your account now. Please check
          your Email for the next 15 mins.
        </p>
        <Button>Contact Campaign manager</Button>
      </div>
    </div>
  );
};

export default Modal;
