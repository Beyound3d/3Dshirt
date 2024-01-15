import React from "react";

const Custombutton = ({type, title, CustomStyles, handleClick}) => {
  return (
    <button className={`px-2 py-1.5 flex-1 rounded-md ${CustomStyles} `} style={generateStyle(type)}>
      {title}
    </button>
  )
}
export default Custombutton