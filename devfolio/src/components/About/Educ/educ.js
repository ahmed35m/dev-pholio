import React from "react"

const Educ = (props) => {
  console.log(props)
  return (
    <div className="feature-textbox" data-label="intro">
      <span>
        {props.data.edges[0].node.shortBio.shortBio}
      </span>
      
    </div>
  )
}
export default Educ
