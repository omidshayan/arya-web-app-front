import React from 'react'
import './indexCard.css';
import { CiCreditCard1 } from "react-icons/ci";
import { CiShop } from "react-icons/ci";
import { CiAlignCenterH } from "react-icons/ci";
import { FaPersonSkiing   } from "react-icons/fa6";

import './../../i18n';
import { useTranslation } from 'react-i18next';


export default function IndexCard() {
    const {t} = useTranslation();


  return (
    <>
        <div className="cardSection">
            <div className="cardItem">
                <div ><CiCreditCard1 fontSize={'large'} className="cardIcon"/></div>
                <div className="cardTitle">{t('lilamy')}</div>
            </div>
            <div className="cardItem">
                <div ><CiShop fontSize={'large'} className="cardIcon"/></div>
                <div className="cardTitle">{t('shops')}</div>
            </div>
            <div className="cardItem">
                <div ><CiAlignCenterH fontSize={'large'} className="cardIcon"/></div>
                <div className="cardTitle">{t('centers')}</div>
            </div>
            <div className="cardItem">
                <div ><FaPersonSkiing   fontSize={'large'} className="cardIcon"/></div>
                <div className="cardTitle">{t('persons')}</div>
            </div>
        </div>
    </>
  )
}
