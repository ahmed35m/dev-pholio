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
      {props.data.data.edges.map(el => {
        return <NavItem key={el.node.id} data={el.node} />
      })}
    </ul>
  )
}
export default NavItems
