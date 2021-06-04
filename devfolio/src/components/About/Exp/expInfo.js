import React from "react"
import * as styles from "./exp.module.css"


const ExpInfo = props => {
 
  var job = props.data
  const formatDate=(dt)=>{
    let fmt = new Date(dt)
    fmt =   fmt.toString().split(' ')
    return fmt[1] + ' '+ fmt[3]
  }
    if(job !=undefined){
  return (
      <div className={styles.expdesc}>
          <div className={styles.exphead}>
          <div>
          <span className={styles.jobpos}>{job.title}</span>
          <span className={styles.jobemployer}>@{' '} {job.employer}</span>
          </div>  
          <div>
            <span className={`${styles.jobdur} ${styles.to}`}>
              { formatDate (props.data.startDate)}
            </span>
            <span className={`${styles.jobdur} ${styles.from}`}>
              { job.endDate== null || job.endDate == ""
                ? "Current Date"
                : formatDate(job.endDate)}
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
  )}
  else
            return <div>An Error occurred. Please reload page</div>
}
export default ExpInfo
