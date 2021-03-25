import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import NavItems from "./navItems"
import * as styles from "./header.module.css"


const Header = ({ siteTitle }) => (
  <header className={`${styles.headerbar} ${styles.headerpinned}`}>
    <div className={styles.bar}>
      <div className={styles.logobar}>
        <a href="" className="no-link">
          <div className={styles.logotitle}>M A</div>{" "}
        </a>
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

export default Header
