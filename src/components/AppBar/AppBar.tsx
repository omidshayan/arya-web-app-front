import "./AppBar.css";
import MenuIcon from "@mui/icons-material/Menu";
import Sidebar from "../SideBar/Sidebar";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function AppBar() {

  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <>
      <div className="appBar">
        <div className="headerMenuItems">
          <Link to={'/'} className="menuItem menuItemActive">home</Link>
          <Link to={'/'} className="menuItem">home</Link>
          <Link to={'/'} className="menuItem">home</Link>
        </div>

        <div className="hamberIconSlider" >
            <MenuIcon  className="hamberIcon" onClick={() => setShowSidebar(true)}/>
        </div>

        <div className="headerLeftItem">
          <Link to={'/login'} className="headerAuth">
            ورود / ثبت نام
          </Link>

          <Link to={'/'}>
            <img src="img/logo.png" alt="" className="headerLogo" />
          </Link>

        </div>
      </div>
      <Sidebar showSlider={showSidebar} closeSlider={setShowSidebar}/>
    </>
  );
}
