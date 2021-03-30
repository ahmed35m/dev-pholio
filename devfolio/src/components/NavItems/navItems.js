import React from "react"
import NavItem from "./NavItem/navItem"
import * as navStyles from "./navItems.module.css"

const NavItems = props => {
  return ( 
      <ul className={ `${navStyles.sociallist}`}>
        <NavItem></NavItem>
        <NavItem></NavItem>
        
      </ul>
  )
}
export default NavItems
