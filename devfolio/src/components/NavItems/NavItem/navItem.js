import React from "react"
import gitpic from "../../../images/logo-github.svg"
import emailpic from "../../../images/mail-outline.svg"
import linkedpic from "../../../images/logo-linkedin.svg"
import * as styles from "./NavItem.module.css"

const images = {
  gitpic,
  emailpic,
  linkedpic,
}
const NavItem = props => {
  let img
  switch (props.data.name.toLowerCase()) {
    case "github":
      img = gitpic
      break
    case "linkedin":
      img = linkedpic
      break
    case "email":
      img = emailpic
      break
  }
  return (
    <li className={styles.navItem}>
      <a href={props.data.link}>
        <img src={img} alt={props.data.name} />
      </a>
    </li>
  )
}
export default NavItem
