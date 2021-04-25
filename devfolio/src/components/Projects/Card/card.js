import React from "react"
import * as styles from "./card.module.css"

const Card = props => {

  return (
    <div className={` ${styles.card}`}>
      <div className={styles.cardimage}>
        {/* <span
                  className={}"material-icons material-icons-outlined"
                  style="font-size: 96px"
                >
                  badge
                </span> */}
      </div>
      <div className={styles.cardtitle}>{props.data.name}</div>
      <div className={styles.carddesc}>{props.data.description} </div>
    </div>
  )
}
export default Card
