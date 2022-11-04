import React from "react";
import Button from "../Button/Button";
import card from "../../assets/Card.svg";
import styles from "./Form.module.css";

type Props = {
  handleSubmit: () => void;
};

const Form: React.FC<Props> = ({ handleSubmit }) => {
  return (
    <div className={styles.form}>
      <div className={styles["form-header"]}>
        <h3 className={styles.premium}>Premium</h3>
        <h3 className={styles.price}>
          $199<span>/month</span>
        </h3>
      </div>
      <p className={styles.description}>Faster Instagram Growth</p>
      <form className={styles["form-content"]}>
        <input type="email" className={styles.input} placeholder="Email" />
        <br />
        <input
          type="text"
          className={styles.input}
          placeholder="Cardholder Name"
        />
        <div className={styles["card-number"]}>
          <input
            type="text"
            className={styles.input}
            placeholder="Card Number"
          />
          <img src={card} alt="card" className={styles["card-img"]} />
        </div>
        <div className={styles.flex}>
          <input
            type="text"
            className={styles["date-input"]}
            placeholder="Date"
          />
          <input
            type="text"
            className={styles["cvv-input"]}
            placeholder="CVV"
          />
        </div>
        <div className={styles.flex}>
          <input
            type="text"
            className={styles["country-input"]}
            placeholder="Country"
          />
          <input
            type="text"
            className={styles["zip-input"]}
            placeholder="Zip"
          />
        </div>
        <input
          type="text"
          className={styles.input}
          placeholder="Discount Code"
        />
        <div className={styles["accept-terms"]}>
          <input type="checkbox" className={styles.checkbox} />
          <p className={styles["terms-text"]}>
            I accept the <span> Terms of Service</span> and{" "}
            <span> Privacy Policy</span>
          </p>
        </div>
        <Button onBtnClick={handleSubmit}>
          Get started <span className={styles.line} />
          <span className={styles["current-price"]}> $199 </span>
          <span className={styles["old-price"]}> $249</span>
        </Button>
        <div className={styles.coupon}>
          <p>Have a coupon?</p>
        </div>
      </form>
    </div>
  );
};

export default Form;
