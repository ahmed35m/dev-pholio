import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import NavItems from "./navItems"
import * as styles from "./header.module.css"
import NavLogo from "./NavLogo/navLogo"

const Header = ({ siteTitle }) => (
  <header className={`${styles.headerbar} ${styles.headerpinned}`}>
    <div className={styles.bar}>
      <NavLogo />
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

export default Header
