import React from "react"
import gitpic from '../../../images/GitHub.png'
import linkpic from '../../../images/GitHub.png' 
const images = {
  gitpic
};
const NavItem = props  => {
  return (
    <li style={ {margin:"0px 10px 0px 10px" } } >
      <a href={props.href}>
        <img
          src= {gitpic}
          // {images[props.src]}
          alt={props.alt}
        /> 
        {/* <img src={require(`${image}`)} alt="product" /> */}

      </a>
    </li>
  )
}
export default NavItem
