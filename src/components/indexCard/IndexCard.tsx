import React from 'react'
import './indexCard.css';
import { CiCreditCard1 } from "react-icons/ci";
import { CiShop } from "react-icons/ci";
import { CiAlignCenterH } from "react-icons/ci";
import { FaPersonSkiing   } from "react-icons/fa6";

export default function IndexCard() {
  return (
    <>
        <div className="cardSection">
            <div className="cardItem">
                <div ><CiCreditCard1 fontSize={'large'} className="cardIcon"/></div>
                <div className="cardTitle">لیلامی</div>
            </div>
            <div className="cardItem">
                <div ><CiShop fontSize={'large'} className="cardIcon"/></div>
                <div className="cardTitle">فروشگاه</div>
            </div>
            <div className="cardItem">
                <div ><CiAlignCenterH fontSize={'large'} className="cardIcon"/></div>
                <div className="cardTitle">مراکز</div>
            </div>
            <div className="cardItem">
                <div ><FaPersonSkiing   fontSize={'large'} className="cardIcon"/></div>
                <div className="cardTitle">اشخاص</div>
            </div>
        </div>
    </>
  )
}
