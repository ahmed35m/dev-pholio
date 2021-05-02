import React, { useState } from "react"
import * as styles from "./exp.module.css"
// import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

function updateDescription() {}

const Exp = props => {

  console.log(
    props.data.nodes.filter(n => n.endDate == null).pop().jobDescription
  )
  const [job_desc, setState] = useState(
    props.data.nodes.filter(n => n.endDate == null).pop().jobDescription
    
  )

  console.log(job_desc)
  return (
    <div className={styles.featured}>
      <div className="feature-textbox">
        <span>
          I have had the oppurtunity to work at the following companies:
        </span>
      </div>
      <div className={styles.exp}>
        <div className={styles.explist}>
          <ul className={styles.companylist}>
            {props.data.nodes.map((el, index) => {
              return (
                <li
                  key={index}
                  className={styles.selected}
                  onClick={updateDescription()}
                >
                  <div>{el.employer}</div>
                </li>
              )
            })}
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
              {job_desc.map((el, index) => {
                return <li key={index}>{el}</li>
              })}
              {/* {documentToReactComponents(job_desc)} */}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Exp
