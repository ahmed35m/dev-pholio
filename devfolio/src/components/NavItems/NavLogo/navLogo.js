import React from "react"
import { Children } from "react";
import * as styles from "./navLogo.module.css"


const NavLogo = () => {
  return (
    <div className={styles.logobox}>
      <a href="" className="no-link">
        <div className={styles.logotitle}>M A</div>
      </a>
    </div>
  )
}

export default NavLogo;
