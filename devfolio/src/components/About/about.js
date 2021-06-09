import React from "react"
import * as styles from "./about.module.css"
import Skills from "./Skills/skills"
import Exp from "./Exp/exp"
import Educ from "./Educ/educ"
import Fade from 'react-reveal/Fade'

const About = props => {
  return (
    <section className={styles.contentcontainer}>
      <div className={styles.contentheading}>ABOUT ME</div>
      <div className={styles.contentbody} data-label="About">
      <Fade bottom>

        <div className={styles.featured}>
          <Educ data={props.data.info} />
          <Skills data={props.data.skills} />   
        </div>
        <Exp data={props.data.work} />
        </Fade>
      </div>
    </section>
  )
}
export default About
