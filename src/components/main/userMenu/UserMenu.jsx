import { Link } from "react-router-dom";
import "./UserPanel.css";
import UserContext from "./../../../Context/UserContext";
import { useContext } from "react";
import { IoMdPerson } from "react-icons/io";
import { RiLockPasswordLine } from "react-icons/ri";
import { IoMdExit } from "react-icons/io";

function UserMenuHeader() {
  const { userData, logout } = useContext(UserContext);

  return (
    <>
<div className="dropdown">
  <img src="img/img-1.jpg" className="userImgProfile" alt="user profile" />
  <div className="dropdown-content">
    <div className="usernameName">
      {userData.name}
    </div>
    <hr className="border"/>
    <Link to="/dashboard" className="d-flex-align"> <IoMdPerson className="m-l5"/> پروفایل</Link>
    <Link to="#" className="d-flex-align"> <RiLockPasswordLine className="m-l5"/> تغییر رمزعبور</Link>
    <Link to="#" className="d-flex-align"> <IoMdExit className="m-l5"/> خروج</Link>
  </div>
</div>
    </>
  );
}
export default UserMenuHeader;
