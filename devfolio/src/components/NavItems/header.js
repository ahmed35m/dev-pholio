import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import NavItems from "./navItems"
import * as styles from "./header.module.css"
import NavLogo from "./NavLogo/navLogo"

const Header = (props ) => (
  
  <header className={`${styles.headerbar} ${styles.headerpinned}`}>
    <div className={styles.bar}>
      <NavLogo />
      <NavItems data={props}/>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
  props:PropTypes.object
}

Header.defaultProps = {
  siteTitle: ``,
  props: null
}


export default Header
