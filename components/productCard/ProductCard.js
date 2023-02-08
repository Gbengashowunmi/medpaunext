import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { BsStar, BsStarFill, BsStarHalf } from "react-icons/bs";
import data from "../Data";
import styles from "./productCard.module.scss";
export default function ProductCard({ image, productName,id }) {

  return (
      <div className={styles.product_container}>
      <div className={styles.sale}>
            <p>SALE!</p>
          </div>
        <div className={styles.image}>
          <Image src={image} alt="product-pic" width={900} height={900}/>
          

          <div className={styles.add_to_cart}>
    <Link href={`/shop${id}`}>
            <p>Read More</p>
          </Link>
          </div>
        </div>
        <div className={styles.caption}>
          <h5 className={styles.product_name}>{productName}</h5>
          <p className={styles.ratings}><BsStarFill/> <BsStarFill/> <BsStarFill/> <BsStarHalf/> <BsStar/></p>
        </div>
      </div>
  );
}
