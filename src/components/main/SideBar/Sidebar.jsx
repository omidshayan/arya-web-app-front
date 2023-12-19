import "./Sidebar.css";
import { IoMdClose } from "react-icons/io";
import SidebarItems from "./sidebarItems/SidebarItems";
import { Link } from "react-router-dom";
import Lang from "./changeLang/Lang";
import PropTypes from 'prop-types';

import "./../../../i18n";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";

export default function Sidebar({ showSlider, closeSlider }) {
  Sidebar.propTypes = {
    showSlider: PropTypes.bool.isRequired,
    closeSlider: PropTypes.bool.isRequired,
  };

  const { t } = useTranslation();

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

        <hr className="border" />
        <div className="sidebarItems">
          <SidebarItems />
        </div>

        <hr className="border" />
        <Lang />

        <hr className="border" />
        <div className="authSidebar">
          <Link to={"/login"} href="#">
            {" "}
            {t("loginRegister")}{" "}
          </Link>
        </div>
      </div>
    </>
  );
}
