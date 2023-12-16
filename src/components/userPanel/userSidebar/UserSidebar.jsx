import React from "react";
import "./UserSidebar.css";
import BaseAccordion from "../../main/accourdion/Accordion";
import { Link } from "react-router-dom";
import { BiSolidShow } from "react-icons/bi";
import { MdShowChart } from "react-icons/md";
import { MdDashboard } from "react-icons/md";
import { MdOutlineShoppingBag } from "react-icons/md";
import { MdShoppingCart } from "react-icons/md";
import { IoExit } from "react-icons/io5";
import { FaInfoCircle } from "react-icons/fa";

export default function UserSidebar() {
  return (
    <>
      <div className="userSidebar p-10">
        <div className="userSidebarSingleItems p-t">
          <Link to={'/dashboard'}>
            <div className="f-w color d-flex-align a-u-s">
              <MdDashboard className="m-l10"/>
              داشبورد
            </div>
          </Link>
        </div>
        <div className="userSidebarSingleItems p-t">
          <Link to={'/userInfo'}>
            <div className="f-w color d-flex-align m-b5">
              <FaInfoCircle className="m-l10"/>
              مشخصات من
            </div>
          </Link>
        </div>

        <BaseAccordion title={"لیلامی"} icon={<MdOutlineShoppingBag />}>

        <Link to={"/create-lilam"} className="color accordionLink p-t6">
            <BiSolidShow className="m5" />ثبت کالا
          </Link>

          <Link to={"/myLilam"} className="color accordionLink p-t6">
            <BiSolidShow className="m5" />لیلام های من
          </Link>

          <Link to={"/deactiveLilam"} className="color accordionLink p-t6">
            <BiSolidShow className="m5" />لیلام های غیرفعال
          </Link>

          <Link to={"/"} className="color accordionLink p-t6">
            <MdShowChart className="m5" /> نمایش همه
          </Link>
        </BaseAccordion>

        {/* shop */}
        <BaseAccordion title={"فروشگاه ها"} icon={<MdShoppingCart />}>
          <Link to={"/"} className="color accordionLink p-t6">
            <BiSolidShow className="m5" /> نمایش همه
          </Link>

          <Link to={"/"} className="color accordionLink p-t6">
            <MdShowChart className="m5" /> نمایش همه
          </Link>
        </BaseAccordion>

        <div className="userSidebarSingleItems p-t6">
          <Link to={""}>
            <div className="f-w color d-flex-align">
              <IoExit className="m-l10"/>
              خروج
            </div>
          </Link>
        </div>
        
      </div>
    </>
  );
}
