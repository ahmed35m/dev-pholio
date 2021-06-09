import  React,{ useState, useEffect } from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import NavItems from "./navItems"
import * as styles from "./header.module.css"
import NavLogo from "./NavLogo/navLogo"

const Header = props => {
  const [prevScrollPos, setPrevScrollPos] = useState(0)
  const [visible, setVisible] = useState(true)

  const handleScroll = () => {     
    const currentScrollPos = window.pageYOffset;
    setVisible((prevScrollPos > currentScrollPos ))//&& prevScrollPos - currentScrollPos > 70) || currentScrollPos < 10);
    setPrevScrollPos(currentScrollPos);
    //console.log("prev " + prevScrollPos +" current:"+currentScrollPos)
  };

  useEffect(() => {   
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);

  }, [prevScrollPos, visible, handleScroll]);

  return (
    <header className={`${styles.headerbar} ${styles.headerpinned}`}  style={ {top: visible ? '0' : '-60px'}}>
      <div className={styles.bar}>
        <NavLogo />
        <NavItems data={props} />
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
  props: PropTypes.object,
}

Header.defaultProps = {
  siteTitle: ``,
  props: null,
}

export default Header
