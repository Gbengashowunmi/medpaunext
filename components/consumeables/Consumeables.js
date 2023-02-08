import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import styles from "./consumeable.module.scss"
export default function Consumeables({image,productName, id}) {
  return (
    <div className={styles.consumeable_container}>
        <div className={styles.image}>
          <Link href={`/shop/${id}`}>  <Image src={image} alt="product" width={900} height={900} />
          </Link>
        </div>
        <div className={styles.description}>

        <p className={styles.item_name}>{productName}</p>
        </div>
        <div className={styles.discount}>%565 off</div>
        
    </div>
  )
}
