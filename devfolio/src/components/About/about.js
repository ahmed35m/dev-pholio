import React from "react"
import * as styles from "./about.module.css"
import Skills from "./Skills/skills"
import Exp from "./Exp/exp"
import Educ from "./Educ/educ"

const About = props => {
  return (
    <section className={styles.contentcontainer}>
      <div className={styles.contentheading}>ABOUT ME</div>
      <div className={styles.contentbody} data-label="About">
        <div className={styles.featuredbox}>
          <Educ
            data-label="Education"
            data={props.data.info}
            className={styles.contb}
          />
          <Skills data-label="Skills" data={props.data.skills} />
        </div>
        <div className={styles.featuredbox}>
          <Exp data={props.data.work} />
        </div>
      </div>
    </section>
  )
}
export default About
