import React, { useState } from "react"
import * as styles from "./skills.module.css"

function filterSkills(type, p) {
  return p.data.edges.filter(
    el => el.node.type.toUpperCase() == type.toUpperCase()
  )
}
const skillTypes = ["All", "Programming Language", "Framework", "Tooling"]

const Skills = props => {
  const [skill, setSkill] = useState(props.data.edges)

  return (
    <div className="feature-skillbox">
      <div data-label="skills">
        <span>Here are some of the technologies I have worked with:</span>
      </div>
      <div className={styles.skilllist}>
        <div className={styles.skillcat}>
          <ul className="horz-list">
            
              {skillTypes.map((el, index) => {
                return (
                  <li key={index} className={styles.skillcatitem}>
                    < button
                      className={styles.skillcatbtn}
                      href=""
                      onClick={e => {
                        e.target.innerHTML=="All" ?  setSkill(props.data.edges):
                        setSkill(filterSkills(e.target.innerHTML, props))
                      }}
                    >
                      {el}
                    </button>
                  </li>
                )
              })}
          </ul>
        </div>
        <div className={styles.pills}>
          {skill.map((el, index) => {
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
