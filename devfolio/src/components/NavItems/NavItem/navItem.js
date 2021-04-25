import React from "react"
import gitpic from '../../../images/GitHub.png'
import emailpic from '../../../images/GitHub.png' 
const images = {
  gitpic, emailpic
};
const NavItem = props  => {

  return (
    <li style={ {margin:"0px 10px 0px 10px" } } >
      <a href={props.data.link} >
        <img
          src= {gitpic}
          // {images[props.src]}
          alt={props.data.name}
        /> 
        {/* <img src={require(`${image}`)} alt="product" /> */}

      </a>
    </li>
  )
}
export default NavItem
