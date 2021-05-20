import React from "react"
import * as styles from "./card.module.css"
import emailpic from "../../../images/mail-outline.svg"

const Card = props => {
  return (
    <a className={` ${styles.card}`} href={props.data.gitHubLink}>
      <div className={styles.cardheader}>
        <div className={styles.cardtitle}>{props.data.name}</div>

        <div className={styles.cardimage}>
          <img src={emailpic} />{" "}
        </div>
      </div>
      <div className={styles.carddesc}>{props.data.description} </div>
      <div className={styles.cardfooter}>
        {props.data.techStack != null ? (
          props.data.techStack.map((tech,index) => {
            return <span className={styles.cardfooterItem} key={index} id={tech}> {tech}</span>
          })
        ) : (
          <span></span>
        )}
      </div>
    </a>
  )
}
export default Card
