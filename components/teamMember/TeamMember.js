import Image from 'next/image'
import React from 'react'
import styles from "./team-member.module.scss"
export default function TeamMember({image, name, position}) {
  return (
    <div className={styles.team_member_container}>
<div className={styles.image}>
    <Image src={image} alt='member' width={900} height={900}/>
</div>
<hr/>
<h5>{name}</h5>
<p>{position}</p>
    </div>
  )
}
