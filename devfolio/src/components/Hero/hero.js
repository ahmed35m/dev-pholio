import React from "react"
import * as styles from "./hero.module.css"

const hero = props => {
  return (
    <div className={styles.hero}>
      <div className={styles.heroHeads}>
        <div className={styles.prehero}>Hey, I am  </div>
        <h1 className={styles.heroheading}>Muhammad Ahmed</h1>
        <h5 className={styles.herosubheading}>Software Developer</h5>
      </div>
    </div>
  )
}

export default hero
