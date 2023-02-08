import React from "react";
import styles from "./ourServices.module.scss";

export default function OurServices({head, decsription}) {
  return (
    <div className={styles.service_container}
    data-aos="zoom-in-right"
    data-aos-offset="50"
    data-aos-delay="10"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out"
    data-aos-mirror="true"
    data-aos-once="true"
    >
      <div className={styles.icon}></div>
      <h4>{head}</h4>
      <p>
        {decsription}
      </p>
      {/* <button className={styles.read-more-btn">READ MORE</button>  */}
    </div>
  );
}
