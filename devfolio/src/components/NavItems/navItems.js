import React from "react"
import NavItem from "./NavItem/navItem"
import * as navStyles from "./navItems.module.css"


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
