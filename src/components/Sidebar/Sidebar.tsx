import { Carousel } from "../Carousel/Carousel";
import Partner from "./Partner";

import trustpilot from "../../assets/Trustpilot.svg";
import usatoday from "../../assets/USAToday.svg";
import client1 from "../../assets/Client1.svg";
import client2 from "../../assets/Client2.svg";
import foxnews from "../../assets/FoxNews.svg";
import SingleClient from "./SingleClient";
import cbs1 from "../../assets/cbs1.svg";
import star from "../../assets/Star.svg";
import cbs2 from "../../assets/cbs2.svg";
import nbc from "../../assets/NBC.svg";

import styles from "./Sidebar.module.css";

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <Carousel />
      <div className={styles["sidebar-content"]}>
        <h3 className={styles["sidebar-title"]}>3,700+ Happy clients </h3>
        <div className={styles.rating}>
          <img src={star} alt="star" />
          <img src={star} alt="star" />
          <img src={star} alt="star" />
          <img src={star} alt="star" />
          <img src={star} alt="star" />
        </div>
        <div className={styles["rating-info"]}>
          <p>Publicly rated 4.7 on</p>
          <img src={trustpilot} alt="trustpilot" />
        </div>
        <SingleClient
          photo={client1}
          name="Samy, Fitness trainer"
          text="Managed by a human, not a robot. This is the best solution I’ve seen
            to increase real followers"
        />
        <SingleClient
          photo={client2}
          name="Rosie-Jane Gregory, Luxury property Agent"
          text=" Really great value for money, really would highly recommend for
          anybody that is trying to reach out and get more followers"
        />
        <div className={styles.partners}>
          <Partner photo={usatoday} />
          <Partner photo={nbc} />
          <Partner photo={foxnews} />
          <div className={styles["photo-border-wrap"]}>
            <img src={cbs1} alt="" />
            <img src={cbs2} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
