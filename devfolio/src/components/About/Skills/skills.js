import React, { useState } from "react"

import * as styles from "./skills.module.css"

function filterSkills(type, p) {
  if (type == "All") {
    return p.data.edges
  } else {
    return p.data.edges.filter(
      el => el.node.type.toUpperCase() == type.toUpperCase()
    )
  }
}
const skillTypes = ["All", "Programming Language", "Framework", "Tooling"]

const Skills = props => {
  const [skill, setSkill] = useState(props.data.edges)
  const [activeSkill, setActiveSkill] = useState("All")

  return (
    <div className="feature-skillbox">
      <div className={styles.skillintro}>
      </div>
      <div className={styles.skillcat}>
        <ul className="horz-list">
          {skillTypes.map((el, index) => {
            return (
              <li key={index} className={styles.skillcatitem}>
                <button
                  className={activeSkill == el ? styles.skillActive : null}
                  onClick={e => {
                    setActiveSkill(e.target.innerHTML)
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
              <div key={index} className={styles.skillpill}>
                <span>{el.node.name}</span>
              </div>
            )
          })}
        </div>
      </div>
  )
}

export default Skills
