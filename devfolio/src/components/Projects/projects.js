import React from "react"
import * as styles from "./projects.module.css"
import Card from './Card/card'

const Projects = props => {
  return (
    <section className={styles.contentcontainer}>
      <div className={styles.contentheading}>RECENT PROJECTS</div>

      <div className={styles.contentbody} data-label="Projects">
        <div className={styles.cardlist}>
            <Card></Card>
        </div>
      </div>

    </section>
  )
}
export default Projects
