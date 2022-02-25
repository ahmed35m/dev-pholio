import React from "react"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

const Educ = (props) => {
  const RichContent = JSON.parse(props.data.edges[0].node.bioRtf.raw);
  return (
    <div className="feature-textbox" data-label="intro">
      <span>
        {documentToReactComponents(RichContent)}
        {/* {props.data.edges[0].node.shortBio.shortBio} */}
      </span>
      
    </div>
  )
}
export default Educ
