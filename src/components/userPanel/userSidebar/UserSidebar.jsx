import React from "react";
import "./UserSidebar.css";
import BaseAccordion from "../../main/accourdion/lilam/Accordion";

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
        <BaseAccordion />
      </div>
    </>
  );
}
