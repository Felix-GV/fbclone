import { Avatar } from "@material-ui/core";
import React from 'react';
import "./SidebarRow.css";

// remember 'Icon' can be passed in as a prop as long as it has a capital letter
function SidebarRow({ src, Icon, title }) {
  return (
  <div className='sidebarRow'>
      {src && <Avatar src={src} />}
      {Icon && <Icon />}

      <h4> {title} </h4>
  </div>
  )
}

export default SidebarRow;
