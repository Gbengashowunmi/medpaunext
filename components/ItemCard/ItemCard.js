import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { BsStar, BsStarFill, BsStarHalf } from 'react-icons/bs'
import styles from "./itemCard.module.scss"
export default function ItemCard({image,productName, id}) {
  return (
    <div className={styles.item_container}>
        <div className={styles.image}>
          <Link href={`/shop/Shop/${id}`}>  <Image src={image} alt="product" width={900} height={900} />
          </Link>
        </div>
        <div className={styles.description}>

        <p className={styles.item_name}>{productName}</p>
        <p className={styles.ratings}><BsStarFill/> <BsStarFill/> <BsStarFill/> <BsStarHalf/> <BsStar/></p>
        {/* <p className={styles.price'>$689  */}
        {/* <span><button className={styles.add-to-cart'><h5>+</h5></button></span> */}
        {/* </p> */}
        </div>
        <div className={styles.discount}>%565 off</div>
        
    </div>
  )
}
