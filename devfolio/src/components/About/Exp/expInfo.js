import React from "react"
import * as styles from "./exp.module.css"
const ExpInfo = props => {
  var job = props.data
  if(job !=undefined){
  return (
    <div>
      <div className={styles.expdesc}>
        <div className={styles.exptitle}>
          <div className={styles.exphead}>
          <span className={styles.jobpos}>{job.title}</span>
          <span className={styles.jobemployer}>@{' '} {job.employer}</span>
          </div>
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
  )}
  else
            return <div>An Error occurred. Please reload page</div>
}
export default ExpInfo
