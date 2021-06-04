import React, { useState, useEffect } from "react"
import * as styles from "./exp.module.css"
import ExpInfo from "./expInfo"

// function formatDate(dt) {
//   let m = [
//     "Jan",
//     "Feb",
//     "Mar",
//     "Apr",
//     "May",
//     "Jun",
//     "Jul",
//     "Aug",
//     "Sept",
//     "Oct",
//     "Nov",
//     "Dec",
//   ]
//   let d = new Date(dt)
// }

function getJob(jobs, e) {
  return jobs.data.nodes.filter(n => n.employer == e.target.innerHTML).pop()
}
const Exp = props => {
  const emplyHist = props
  const [job, setJob] = useState(
    props.data.nodes.filter(n => n.endDate == null).pop()
  )
  const [activeJob, setActiveJob] = useState(job.employer)

  // useEffect(() => {
  //   console.log('Use effect called')
  //   setJob()
  // }, [job])

  return (
    <div className={styles.featured}>
      <div className="feature-textbox">
        <span>
          I have had the oppurtunity to work at the following companies:
        </span>
      </div>
      <div className={styles.exp}>
        <div className={styles.explist}>
          <div className={styles.companylist}>
            {props.data.nodes.map((el, index) => {
              return (
                <button
                  className={activeJob == el.employer ? styles.selected : null}
                  key={index}
                  onClick={e => {
                    setJob(prevState => {
                      return getJob(emplyHist, e)
                    })
                    setActiveJob(el.employer)
                  }}
                >
                  {el.employer}
                </button>
              )
            })}
          </div>
        </div>
        <ExpInfo data={job} />
      </div>
    </div>
  )
}
export default Exp
