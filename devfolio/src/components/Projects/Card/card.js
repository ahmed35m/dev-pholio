import React from "react"
import * as styles from "./card.module.css"
import emailpic from "../../../images/mail-outline.svg"

const getRandomColor=()=>{
  const randomColor = Math.floor(Math.random()*16777215).toString(16);
  return "#" + randomColor;
}
const Card = props => {
  return (
    <div  className={` ${styles.card}`}>
      <a href={props.data.gitHubLink} className={` ${styles.cardwrapper}`} >
      <div className={styles.cardheader}>
        <div className={styles.cardtitle}>{props.data.name}</div>

        <div className={styles.cardimage} style={{backgroundColor: getRandomColor()}}>
          {/* <img src={emailpic} />{" "} */}
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
    </div>
  )
}
export default Card
