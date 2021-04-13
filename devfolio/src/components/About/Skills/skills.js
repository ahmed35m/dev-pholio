import React from 'react'
import * as styles from "./skills.module.css"

function updateJobDesc(){
  return null;
}
const Skills = ()=>{
    return (
        <div className="feature-skillbox">
        <div className={styles.skilllist}>
          <div className={styles.skillcat}>
            <ul className="horz-list">
              <li className={styles.skillcatitem}>
                <button className={styles.skillcatbtn} onClick={updateJobDesc()}>
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
            <span className={styles.skillpill}>Javascript</span>
            <span className={styles.skillpill}>PHP</span>
            <span className={styles.skillpill}>Java</span>
            <span className={styles.skillpill}> HTML</span>
            <span className={styles.skillpill}>SASS</span>
            <span className={styles.skillpill}>Javascript</span>
          </div>
        </div>
      </div>
    )
}

export default Skills;