import "./Sidebar.css";
import { IoMdClose } from "react-icons/io";
import { useEffect, useState } from "react";
import SidebarItems from "./SidebarItems";

export default function Sidebar({ showSlider, closeSlider }) {

  // start handle Theme Mode
  const [theme, setTheme] = useState(false);

  const handle = () => {
    setTheme(!theme);
  };

  useEffect(() => {
    if (theme === true) {
      document.body.classList.add("lightMode");
    } else {
      document.body.classList.remove("lightMode");
    }
  });
  // end handle Theme Mode

  return (
    <>
      <div
        className={`overlay ${showSlider ? "overlayActive" : ""}`}
        onClick={() => closeSlider(false)}
      ></div>

      <div className={`sidebar ${showSlider ? "sidebarActive" : ""}`}>
        <div className="topSidebar">
          <div className="logoSidebar">
            <img src="img/logo.png" alt="" />
          </div>
          <div className="closeSidebar" onClick={() => closeSlider(false)}>
            <IoMdClose />
          </div>
        </div>

        <div className="themeMode">
          <input className="toggle" type="checkbox" onClick={handle} />
        </div>
        <hr className="hr" />
        <SidebarItems />
      </div>
    </>
  );
}
