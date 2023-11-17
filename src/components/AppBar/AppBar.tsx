import React, {useState} from "react";
import "./AppBar.css";
import MenuIcon from "@mui/icons-material/Menu";

export default function AppBar() {
  const [showSidebar, setShowSidebar] = useState(false)

  return (
    <>
      <div className="appBar">
        <div className="headerMenuItems">
          <div className="menuItem menuItemActive">home</div>
          <div className="menuItem">home</div>
          <div className="menuItem">home</div>
        </div>

        <div className="hamberIcon">
            <MenuIcon />
        </div>

        <div className="headerLeftItem">
          <a href="#" className="headerAuth">
            ورود / ثبت نام
          </a>
          <a href="#">
            <img src="img/logo.png" alt="" className="headerLogo" />
          </a>
        </div>
      </div>
    </>
  );
}
