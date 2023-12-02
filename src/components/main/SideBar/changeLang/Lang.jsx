import React from "react";
import { MdEmail } from "react-icons/md";

import i18n from '../../../../i18n';
import { useTranslation } from 'react-i18next';


import "./lang.css";

export default function Lang() {
    const {t} = useTranslation();

    
    const changeLang = (event) => {
        i18n.changeLanguage(event.target.value);
    };
    
  return (
    <>
      <div className="selectLang">
      <MdEmail className="intpuIcon"/>
        <span className="changeLangTitle">{t('selectLnag')}</span>
        <select className="selectTagLang" onChange={changeLang}>
          <option className="optionLang" value="fa">{t('dari')}</option>
          <option className="optionLang" value="pa">{t('pashto')}</option>
        </select>
      </div>
    </>
  );
}
