import { Link } from "react-router-dom";
import { AppstoreOutlined, LinkOutlined } from "@ant-design/icons";
import { Menu } from "antd";
function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}
const items = [

  getItem(
    <Link to="/dashboard" className="color">
      لیلامی
    </Link>,
    "lilams",
    <LinkOutlined className="color" />
  ),

  getItem(
    <Link to="/dashboard" className="color">
      فروشگاه ها
    </Link>,
    "shops",
    <LinkOutlined className="color" />
  ),

  getItem(
    <Link to="/dashboard" className="color">
       اشخاص
    </Link>,
    "personel",
    <LinkOutlined className="color" />
  ),

  getItem(
    <Link to="/dashboard" className="color">
      داشبورد
    </Link>,
    "home",
    <LinkOutlined className="color" />
  ),

  getItem("لیلامی", "sub1", <AppstoreOutlined />, [
    getItem(
      <Link to="/create-lilam" className="color">
         ثبت کالا
      </Link>
    ),
    getItem(
      <Link to="/" className="color">
        نمایش لیلامی های من 
      </Link>
    ),
  ]),

  getItem(
    <Link to="/userInfo" className="color">
      اطلاعات کاربری
    </Link>,
    "userInfo",
    <LinkOutlined className="color" />
  ),

  getItem(
    <Link to="/" className="color">
      خروج
    </Link>,
    "exit",
    <LinkOutlined className="color" />
  ),
];

export default function SidebarItems() {
  const mode = "inline";

  return (
    <>
      <Menu
        className="sidebarMenu"
        style={{
          width: 260,
        }}
        mode={mode}
        items={items}
      />
    </>
  );
}
