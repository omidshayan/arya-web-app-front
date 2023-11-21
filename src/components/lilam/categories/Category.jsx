import React, { useState } from "react";
import "./Category.css";
import { MdEmail } from "react-icons/md";
import { BiSolidCategory } from "react-icons/bi";

export default function Category() {
    const [showCateMolie, setShowCateMobile] = useState(false);

  return (
    <>
      <div className={showCateMolie && 'overlay overlayActive'} onClick={() => setShowCateMobile(false)}></div>
      <div className={showCateMolie && 'categoriesList active'}>
        <div className='cateItemMobile'>
          <ul className={showCateMolie ? 'ulCate' : 'ulModal ulCate'}>
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

      {/* category icon */}
      <div className="btnCateLilam lilamIconCatetooltip" onClick={() => setShowCateMobile(true)}>
        <BiSolidCategory className="btnCateIcon" />
        <span className="tooltiptext">دسته بندی ها </span>
      </div>
    </>
  );
}
