import React from "react"
import NavItem from "./NavItem/navItem"

const NavItems = props => {
  return (
    <div class="social-bar">
      <ul class="social-list horz-list">
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
