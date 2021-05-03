import React, { useState } from "react"
import * as styles from "./exp.module.css"
// import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

const Exp = props => {

  const [job, setJob] = useState(
    props.data.nodes.filter(n => n.endDate == null).pop()
  )

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
                  onClick={e => {
                    setJob( props.data.nodes.filter(n => n.employer == e.target.innerHTML).pop())
                  }}
                >
                  <div>{el.employer}</div>
                </li>
              )
            })}
          </ul>
        </div>

        <div className={styles.expdesc}>
          <div className={styles.exptitle}>
            <span className={styles.jobpos}>{job.title}</span>
            <div>
              <span className={`${styles.jobdur} ${styles.to}`}>
                {job.startDate}
              </span>
              <span className={`${styles.jobdur} ${styles.from}`}>
                {job.endDate == null || job.endDate == ""
                  ? "Current Date"
                  : job.endDate}
              </span>
            </div>
          </div>
          <div className={styles.expduties}>
            <ul>
              {job.jobDescription.map((el, index) => {
                return <li key={index}>{el}</li>
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Exp
