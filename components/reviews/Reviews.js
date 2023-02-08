import Image from "next/image";
import React from "react";
import styles from "./reviews.module.scss";
export default function Reviews({review, reviewer, reviewerWork}) {
  return (
    <div className={styles.review_container}>
      <p>
        {review}
      </p>
      <hr/>

      <div className={styles.reviewer}>
        <div className={styles.reviewer_img}>
          <Image src="/images/user-profile-2.png" alt="user" width={900} height={900}/>
        </div>
        <div className={styles.reveiwer_info}>
          <h6 className={styles.name}>{reviewer}</h6>
          <p className={styles.job}>{reviewerWork}</p>
        </div>
      </div>
    </div>
  );
}