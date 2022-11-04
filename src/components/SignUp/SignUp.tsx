import { useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import ProgressBar from "./ProgressBar";
import Modal from "../Modal/Modal";
import Form from "./Form";

import logo from "../../assets/Logo.svg";
import styles from "./SignUp.module.css";

const SignUp = () => {
  const [showModal, setShowModal] = useState<boolean>(false);

  const submitHandler = () => {
    setShowModal(true);
  };

  return (
    <div className={styles.signup}>
      {showModal ? (
        <Modal />
      ) : (
        <>
          <div className={styles["signup-content"]}>
            <ProgressBar />
            <img src={logo} alt="Logo" className={styles.logo} />
            <Form handleSubmit={submitHandler} />
          </div>
          <Sidebar />
        </>
      )}
    </div>
  );
};

export default SignUp;
