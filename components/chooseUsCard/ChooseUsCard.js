import Image from "next/image";
import React from "react";
import styles from "./chooseUsCard.module.scss";
export default function ChooseUsCard({title, details, image}) {
  return (
    <div className={styles.choose_us_container}>
        <div className={styles.chooseUS_image}>
            <Image src={image} alt="choose" width={900} height={900} />
        </div>
        <div className={styles.info}>
      <h3>{title}</h3>
      <p>
        {details}
      </p>
      </div>
    </div>
  );
}
