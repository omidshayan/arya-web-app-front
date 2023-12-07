import React from "react";
import "./UserContent.css";
import UserSidebar from "../userSidebar/UserSidebar";

export default function UserContent({ title, children }) {
  return (
    <>
      <div className="singleContainer d-flex-all">
        <UserSidebar />
        <div className="userContent p-10">
          <h3>{title}</h3>
          {children}
        </div>
      </div>
    </>
  );
}
