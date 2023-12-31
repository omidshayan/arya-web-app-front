import React, { useState } from "react";
import { FaEuroSign } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoMdTime } from "react-icons/io";
import { GiConfirmed } from "react-icons/gi";

import "./singleLilamPage.css";
import SliderProduct from "./sliderProduct/SliderProduct";
import SimilarProducts from "../similarProducts/SimilarProducts";
import BackBtn from "../../backBtn/BackBtn";

export default function SingleLilamPage() {

  // start show contact infos
  const [showContactInfo, setShowContactInfo] = useState(false);

  // end show contact infos

  return (
    <>
      <div className="singleContainer">
        <div className="mainSingleLilam d-flex-justify">
          <div className="photoProduct m5">
            <SliderProduct />
          </div>

          <div className="backBtn">
            <BackBtn />
          </div>

          <div className="detailsProduct m5">
            <div className="productName">یخچال فریزر آلمانی با ضمانت نامه</div>
            <div className="priceProduct d-flex-align">
              <IoMdTime className="m-l5" />
              دو روز پیش
            </div>
            <div className="priceProduct d-flex-align">
              <FaEuroSign className="m-l5" />
              قیمت: 2500 افغانی
            </div>
            <div className="addressContent">
              <FaLocationDot className="m-l5" />
              هرات بکرآباد سمت شرق مسجد جوادیه
            </div>

            {/* start contact infos */}
            <div onClick={() => setShowContactInfo(true)} className= {showContactInfo ? 'showContactActive f-w deactive' : 'showContact f-w '}>تماس با فروشنده</div>
            <div className={showContactInfo ? 'infoContact activeContactInfo' : 'infoContact  '}>
              <div className="phoneContact">
                <span className="copyPhone"> کپی </span>
                <div className="numberContact"> 0796968490 </div>
              </div>
              <div className="addressContact">هرات، شهرنو، بکر آباد</div>
            </div>
            {/* end contact infos */}

            <div className="lilamDesc">توضیحات:</div>
            <p className="m-r10">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
              fugiat eaque sequi culpa. Deleniti, nostrum! Debitis dolores nisi
              iste similique! Expedita, excepturi nesciunt! Repudiandae
              explicabo voluptatum, quisquam numquam iste aliquid.
            </p>

            <div className="lilamDesc">ویژه گی ها:</div>
            <ul className="ulProduct">
              <li className="d-flex-align">
                <GiConfirmed className=" m-l5" />
                ویژه گی اول
              </li>
              <li className="d-flex-align">
                <GiConfirmed className=" m-l5" />
                ویژه گی دوم
              </li>
              <li className="d-flex-align">
                <GiConfirmed className=" m-l5" />
                ویژه گی سوم
              </li>
              <li className="d-flex-align">
                <GiConfirmed className=" m-l5" />
                ویژه گی چهارم
              </li>
            </ul>
          </div>
        </div>

        {/* similar products */}
        <SimilarProducts />
      </div>
    </>
  );
}
