import React from "react"
import * as styles from "./skills.module.css"

function updateSkillList() {
  return null
}
const Skills = props => {
  console.log(props)
  return (
    <div className="feature-skillbox">
      <div data-label="skills">
        <span>Here are some of the technologies I have worked with:</span>
      </div>
      <div className={styles.skilllist}>
        <div className={styles.skillcat}>
          <ul className="horz-list">
            <li className={styles.skillcatitem}>
              <button
                className={styles.skillcatbtn}
                onClick={updateSkillList()}
              >
                All
              </button>
            </li>
            <li className={styles.skillcatitem}>
              <a className={styles.skillcatbtn} href="">
                Programming Languages
              </a>
            </li>
            <li className={styles.skillcatitem}>
              <a className={styles.skillcatbtn} href="">
                Frameworks{" "}
              </a>
            </li>
            <li className={styles.skillcatitem}>
              <a className={styles.skillcatbtn} href="">
                Tooling{" "}
              </a>
            </li>
          </ul>
        </div>
        <div className={styles.pills}>
          {props.data.edges.map((el, index) => {
            return (
              <span key={index} className={styles.skillpill}>
                {el.node.name}
              </span>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Skills
