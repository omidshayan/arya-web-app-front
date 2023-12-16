import React from "react";
import "./Dashboard.css";
import { MdOutlineShoppingBag } from "react-icons/md";
import UserContent from './../userContent/UserContent';
export default function UserDashboard() {
  return (
    <>
      <UserContent title={'داشبورد'}>
        <div className="userBoxes d-flex-all">
          <div className="userBox d-flex-all color">
            {" "}
            <MdOutlineShoppingBag className="font-icon m-l5" />
            تعداد لیلام ها
          </div>

          <div className="userBox d-flex-all color">
            {" "}
            <MdOutlineShoppingBag className="font-icon m-l5" /> فروخته شده
          </div>

          <div className="userBox d-flex-all color">
            {" "}
            <MdOutlineShoppingBag className="font-icon m-l5" />
            فروشگاه
          </div>
        </div>
        <h3>اطلاعیه ها</h3>
        {/* <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
          reiciendis, veritatis nesciunt repellendus vitae deserunt libero
          eveniet ducimus commodi, in est, nam aperiam ex temporibus!
          Perferendis consectetur ab veritatis distinctio.
        </p> */}
      </UserContent>
    </>
  );
}
