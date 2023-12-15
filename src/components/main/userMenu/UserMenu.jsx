import { Dropdown } from "antd";
import { CgProfile } from "react-icons/cg";
import "./UserPanel.css";
import { Link } from "react-router-dom";
import UserContext from "../../../Context/UserContext";
import { useContext } from "react";

function UserPanel() {
  const { userData, logout } = useContext(UserContext);
  const items = [
    {
      key: "1",
      label: (
        <div rel="noopener noreferrer" to="" className="color f-w m-t5">
          {userData.name}
          <hr className="hr"/>
        </div>
      ),
    },
    {
      key: "2",
      label: (
        <Link rel="noopener noreferrer" to="/dashboard" className="color f-w">
          <CgProfile className="m-l10"/>
          پروفایل
        </Link>
      ),
    },
    {
      key: "3",
      label: (
        <Link rel="noopener noreferrer" to="" className="color f-w">
           <CgProfile className="m-l10"/>
          تغییر رمزعبور
        </Link>
      ),
    },
    {
      key: "4",
      label: (
        <div rel="noopener noreferrer" className="color f-w" onClick={logout}>
           <CgProfile className="m-l10"/>
          خروج
        </div>
      ),
    },
  ];

  return (
    <>
      <Dropdown className="userPro"
        menu={{
          items,
        }}
        placement="bottom"
        arrow
      >
        <img
          src="img/img-1.jpg"
          alt="user profile"
          className="userPhotoProfile"
        />
      </Dropdown>
    </>
  );
}
export default UserPanel;
