import React from 'react'
import { FaEuroSign } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoMdTime } from "react-icons/io";

import './singleLilamPage.css';
import SliderProduct from './sliderProduct/SliderProduct';


export default function SingleLilamPage() {
  return (
    <>
        <div className="singleContainer">
            <div className="mainSingleLilam d-flex-justify">
                <div className="detailsProduct m5">
                  <div className="productName">یخچال فریزر آلمانی با ضمانت نامه</div>
                  <div className="priceProduct d-flex-align">
                    <IoMdTime className='m-l5'/>
                    دو روز پیش
                  </div>
                  <div className="priceProduct d-flex-align">
                    <FaEuroSign className='m-l5'/>
                    قیمت: 2500 افغانی
                  </div>
                  <div className="addressContent">
                    <FaLocationDot className='m-l5'/>
                    هرات بکرآباد سمت شرق مسجد جوادیه
                  </div>
                </div>
                <div className="photoProduct m5">
                  <SliderProduct />
                </div>
            </div>
        </div>
    </>
  )
}
