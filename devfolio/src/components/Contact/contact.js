import React from "react"
import * as styles from "./contact.module.css"

const Contact = (props) => {
  return (
    <section className={styles.contactsection}>
      <div className={styles.contacttitle}>Thanks for visiting, lets get in touch </div>
      <a className={styles.contactbutton} href={`mailto:{props.email}`}> Contact</a>
    </section>
  )
}
export default Contact
