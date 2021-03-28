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
        <div class="featured">
          <Educ/>
          <Skills />
          </div>

          <Exp />
      </div>
    </section>
  )
}
export default About
