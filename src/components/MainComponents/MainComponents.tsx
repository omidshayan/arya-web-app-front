import React, { useState } from "react";

import AppBar from "./../AppBar/AppBar";
import Slider from "./../slider/Slider";
import Sidebar from "./../SideBar/Sidebar";


export default function MainComponents() {
    const [showSidebar, setShowSidebar] = useState(false);
    
  return (
    <>
      <AppBar />
      <Slider />
      {showSidebar && (<Sidebar setShow={false} />)}
    </>
  );
}
