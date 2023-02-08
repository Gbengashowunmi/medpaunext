import React from "react";
import { TbTruckDelivery } from "react-icons/tb";
import styles from "./shortMessage.module.scss";
export default function ShortMessage({ description, header }) {
  return (
    <div className={styles.short_message}>
        <div className={styles.container}>

      <div className={styles.sm_icon}>
        <TbTruckDelivery className={styles.icon} />
      </div>
      <h4>{header}</h4>
      <p>{description}.</p>
        </div>
    </div>
  );
}
