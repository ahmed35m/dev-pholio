import React from "react"
import NavItem from "./NavItem/navItem"
import * as navStyles from "./navItems.module.css"

const items = [
  {
    src: "https://github.com/ahmed35m",
    alt: "github account",
    href: "gitpic",
  },
  {
    src: "LinkedIn",
    alt: "github account",
    href: "../../../images/GitHub.png",
  },
]
const NavItems = props => {
  return (
    <ul className={`${navStyles.sociallist}`}>
      <NavItem data={items[0]}></NavItem>
      <NavItem data={items[1]}></NavItem>
    </ul>
  )
}
export default NavItems
