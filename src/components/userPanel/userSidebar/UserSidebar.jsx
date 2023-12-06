import React from "react";
import "./UserSidebar.css";
import BaseAccordion from "../../main/accourdion/Accordion";
import { Link } from "react-router-dom";
import { BiSolidShow } from "react-icons/bi";
import { MdShowChart } from "react-icons/md";

export default function UserSidebar() {
  return (
    <>
      <div className="userSidebar p-10">
        <div className="img-avatar">
          <img src="img/img-1.jpg" alt="" />
        </div>
        <div className="userSidebarItems">
          <div className="userSidebarItem">lilam</div>
        </div>
        <BaseAccordion title={"لیلامی"}>
          <Link to={"/"} className="color accordionLink p-t6">
            <BiSolidShow className="m5"/> نمایش همه
          </Link>

          <Link to={"/"} className="color accordionLink p-t6">
            <MdShowChart className="m5"/> نمایش همه
          </Link>
        </BaseAccordion>
      </div>
    </>
  );
}
