import React from "react"
import NavItem from "./NavItem/navItem"
import * as navStyles from "./navItems.module.css"

const NavItems = props => {
  return (
    <div className={navStyles.socialbar}>
      <ul className={ `${navStyles.sociallist} ${navStyles.horz_list}`}>
        <li>
          <a href="https://github.com/ahmed35m">
            <img
              src="./images/icons/GitHub-Mark-120px-plus.png"
              alt="github account"
            />
          </a>
        </li>
        <li>
          <a href="https://twitter.com">
            <span class="material-icons"></span>
          </a>
        </li>
        <li>
          <a href="mailto:muhammadmanzoor16@gmail.com">
            <span class="material-icons">mail</span>
          </a>
        </li>
      </ul>
    </div>
  )
}
export default NavItems
