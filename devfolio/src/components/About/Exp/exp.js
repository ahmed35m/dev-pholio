import React from "react"
import * as styles from "./exp.module.css"

const Exp = props => {
  return (
    <div className={styles.featured}>
      <div class="feature-textbox">
        <span>
          I have had the oppurtunity to work at the following companies:
        </span>
      </div>
      <div className={styles.exp}>
        <div className={styles.explist}>
          <ul className={styles.companylist}>
            <li className={styles.selected}>
              <div>FCI Accelerated Solutions Inc.</div>
            </li>
            <li>
              <div>Government of Saskatchewan</div>
            </li>
          </ul>
        </div>

        <div className={styles.expdesc}>
          <div className={styles.exptitle}>
            <span className={styles.jobpos}>Software Developer</span>
            <div>
              <span className={`${styles.jobdur} ${styles.to}`}>
                September 2018
              </span>
              <span className={`${styles.jobdur} ${styles.from}`}>Current</span>
            </div>
          </div>
          <div className={styles.expduties}>
            <ul>
              <li>did something</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Exp
