import React from 'react'
import styles from "./statistics.module.scss"
import CountUp from 'react-countup';

export default function Statistics() {
  return (
    <div className={styles.stat_wrapper}>
        <h2>We Are Leading in</h2>
        <div className={styles.stat_container}>
            <div className={styles.each_stat}>
                <h1><CountUp end={55} duration={3} enableScrollSpy={true}/>+</h1>
                <p>Medical Equipment</p>
            </div>
            <div className={styles.each_stat}>
                <h1><CountUp end={100} duration={3} enableScrollSpy={true}/>%</h1>
                <p>Reliable Solutions</p>
            </div>
            <div className={styles.each_stat}>
                <h1><CountUp end={6} duration={3} enableScrollSpy={true}/>+</h1>
                <p>Countries Reached</p>
            </div>
            <div className={styles.each_stat}>
                <h1><CountUp end={100} duration={3} enableScrollSpy={true}/>%</h1>
                <p>After Sales support</p>
            </div>
        </div>
    </div>
  )
}
