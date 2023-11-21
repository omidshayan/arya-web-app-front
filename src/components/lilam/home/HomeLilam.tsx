import React from "react";
import "./HomeLilam.css";
import { MdEmail } from "react-icons/md";
import CardLilam from "../card/CardLilam";
import { BiSolidCategory } from "react-icons/bi";
import Category from "../categories/Category";

export default function HomeLilam() {
  
  return (
    <>
      <div className="mainContentLilam">
        <div className="LilamleftItme">
          <div className="lilamCateTitle">دسته ها</div>
          <div className="cateLilam">
            <ul className="ul">
              <a href="#">
                <li className="li">
                  <MdEmail className="lilamCateIcon" />
                  موبایل
                </li>
              </a>
              <a href="#">
                <li className="li">
                  <MdEmail className="lilamCateIcon" />
                  لوازم خانه
                </li>
              </a>
              <a href="#">
                <li className="li">
                  <MdEmail className="lilamCateIcon" />
                  ورزشی
                </li>
              </a>
              <a href="#">
                <li className="li">
                  <MdEmail className="lilamCateIcon" />
                  کمپیوتر
                </li>
              </a>
              <a href="#">
                <li className="li">
                  <MdEmail className="lilamCateIcon" />
                  سرگرمی
                </li>
              </a>
              <a href="#">
                <li className="li">
                  <MdEmail className="lilamCateIcon" />
                  املاک
                </li>
              </a>
              <a href="#">
                <li className="li">
                  <MdEmail className="lilamCateIcon" />
                  موتر
                </li>
              </a>
            </ul>
          </div>
        </div>

        {/* card lilam */}
        <div className="lilamContent">
          <CardLilam />
        </div>

        {/* show categories in mobile */}
        <div className="cateItemsMobile">
          <Category />
        </div>

      </div>
    </>
  );
}
