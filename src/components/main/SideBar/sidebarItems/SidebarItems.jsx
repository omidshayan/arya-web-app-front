import "./UserSidebar.css";
import BaseAccordion from "./../../accourdion/Accordion";
import { Link } from "react-router-dom";
import { MdDashboard } from "react-icons/md";
import { MdOutlineShoppingBag } from "react-icons/md";
import { MdShoppingCart } from "react-icons/md";
import { IoExit } from "react-icons/io5";
import { FaInfoCircle } from "react-icons/fa";

export default function UserSidebar() {
  return (
    <>
      <div>
        <div className="userSidebar p-t10">
          <div className="userSidebarSingleItems p-t">
            <Link to={"/dashboard"}>
              <div className="f-w color d-flex-align a-u-s">
                <MdDashboard className="m-l10" />
                داشبورد
              </div>
            </Link>
          </div>
          <div className="userSidebarSingleItems p-t">
            <Link to={"/userInfo"}>
              <div className="f-w color d-flex-align m-b5">
                <FaInfoCircle className="m-l10" />
                مشخصات من
              </div>
            </Link>
          </div>

          <BaseAccordion
            title={"لیلامی"}
            icon={<MdOutlineShoppingBag />}
            className="bb"
          >
            <Link
              to={"/create-lilam"}
              className="color accordionLink p-t6 m-r25 font-size"
            >
              ثبت کالا
            </Link>

            <Link
              to={"/myLilam"}
              className="color accordionLink p-t6 m-r25 font-size"
            >
              لیلام های من
            </Link>

            <Link to={"/"} className="color accordionLink p-t6"></Link>
          </BaseAccordion>

          {/* shop */}
          <BaseAccordion title={"فروشگاه ها"} icon={<MdShoppingCart />}>
            <Link to={"/"} className="color accordionLink p-t6 m-r25 font-size">
              نمایش همه
            </Link>

            <Link to={"/"} className="color accordionLink p-t6 m-r25 font-size">
              نمایش همه
            </Link>
          </BaseAccordion>

          <div className="userSidebarSingleItems p-t6">
            <Link to={""}>
              <div className="f-w color d-flex-align">
                <IoExit className="m-l10" />
                خروج
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
