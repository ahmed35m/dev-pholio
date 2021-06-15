import React from "react"
import * as styles from "./hero.module.css"

const hero = props => {
  var name = props.data.edges[0].node.name.split(' ');
  name = name[0]+ ' '+name[name.length-1]
  const position = props.data.edges[0].node.title;
  return (
    <div className={styles.hero}>
      <div className={styles.heroHeads}>
        <div className={styles.prehero}>Hey, I am </div>
        <h1 className={styles.heroheading}>{name}</h1>
        <h5 className={styles.herosubheading}>{position}</h5>
        <div className={styles.prehero}>I create solutions for web </div>

      </div>
    </div>
  )
}

export default hero

