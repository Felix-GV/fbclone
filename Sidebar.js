import React from 'react';
import "./Sidebar.css";
import SidebarRow from "./SidebarRow.js";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import EmojiFlagsIcon from "@mui/icons-material/EmojiFlags";
import PeopleIcon from "@mui/icons-material/PeopleOutlineOutlined";
import ChatIcon from "@mui/icons-material/Chat";
import StorefrontIcon from "@mui/icons-material/Storefront";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import ExpandMoreOutlined from "@mui/icons-material/ExpandMoreOutlined";
import FacebookIcon from "@mui/icons-material/Facebook";
import { useStateValue } from "./StateProvider";





function Sidebar() {
  const [{ user }, dispatch] = useStateValue();

  return (<div className='sidebar'>
      <SidebarRow 
      src={user.photoURL}
      Icon = ''
      title ={user.displayName} 
      />
      <SidebarRow 
      Icon = {LocalHospitalIcon} 
      title='COVID-19 Information Center'
      />
      <SidebarRow 
      Icon = {EmojiFlagsIcon} 
      title='Pages'
      />
      <SidebarRow 
      Icon = {PeopleIcon} 
      title='Friends'
      />
      <SidebarRow 
      Icon = {ChatIcon} 
      title='Messenger'
      />
      <SidebarRow 
      Icon = {StorefrontIcon} 
      title='Marketplace'
      />
      <SidebarRow 
      Icon = {VideoLibraryIcon}
      title='Videos'
      />
      <SidebarRow 
      Icon = {ExpandMoreOutlined} 
      title = ''
      />

  </div>
  )
}

export default Sidebar;
