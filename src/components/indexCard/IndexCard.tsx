import React from "react";
import "./indexCard.css";
import { CiCreditCard1 } from "react-icons/ci";
import { CiShop } from "react-icons/ci";
import { CiAlignCenterH } from "react-icons/ci";
import { FaPersonSkiing } from "react-icons/fa6";

import "./../../i18n";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export default function IndexCard() {
  const { t } = useTranslation();

  return (
    <>
      <div className="cardSection">

        <div className="cardItem">
          <Link to={"lilampage"}>
            <div>
              <CiCreditCard1 fontSize={"large"} className="cardIcon" />
            </div>
            <div className="cardTitle">{t("lilamy")}</div>
          </Link>
        </div>

        <div className="cardItem">
            <Link to={"lilampage"}>
          <div>
            <CiShop fontSize={"large"} className="cardIcon" />
          </div>
          <div className="cardTitle">{t("shops")}</div>
          </Link>
        </div>

        <div className="cardItem">
            <Link to={"lilampage"}>
          <div>
            <CiAlignCenterH fontSize={"large"} className="cardIcon" />
          </div>
          <div className="cardTitle">{t("centers")}</div>
          </Link>
        </div>

        <div className="cardItem">
            <Link to={"lilampage"}>
          <div>
            <FaPersonSkiing fontSize={"large"} className="cardIcon" />
          </div>
          <div className="cardTitle">{t("persons")}</div>
          </Link>
        </div>

      </div>
    </>
  );
}
