import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import NavItems from './NavItems/navItems'

const Header = ({ siteTitle }) => (
  <header class="header-bar header-pinned" >
      <div class="bar">
      <div class="logo-bar"><a href="" class="no-link">
        <div class="logo-title">MA</div> </a>
      </div>
      <NavItems />
      </div>
      </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header;
