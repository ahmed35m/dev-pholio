import React from "react"
import pic from '../../../images/GitHub.png'

const NavItem = props  => {
  return (
    <li style={ {margin:"0px 10px 0px 10px" } } >
      <a href="https://github.com/ahmed35m">
        <img
          src= {pic} 
          alt="github account"
        /> 
        {/* <img src={require(`${image}`)} alt="product" /> */}

      </a>
    </li>
  )
}
export default NavItem
