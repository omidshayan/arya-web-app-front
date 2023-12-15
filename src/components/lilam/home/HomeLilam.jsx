import "./HomeLilam.css";
import { MdEmail } from "react-icons/md";
import CardLilam from "../card/CardLilam";
import Category from "../categories/Category";
import { Link } from "react-router-dom";

export default function HomeLilam() {
  return (
    <>
      <div className="container">
        <div className="mainContentLilam">
          <div className="LilamleftItme">
            <div className="lilamCateTitle">دسته ها</div>
            <div className="cateLilam">
              <ul className="ul">
                <Link to={'lilampage'}>
                  <li className="li">
                    <MdEmail className="lilamCateIcon" />
                    موبایل
                  </li>
                </Link>
                <Link to={'lilampage'}>
                  <li className="li">
                    <MdEmail className="lilamCateIcon" />
                    لوازم خانه
                  </li>
                </Link>
                <Link to={'lilampage'}>
                  <li className="li">
                    <MdEmail className="lilamCateIcon" />
                    ورزشی
                  </li>
                </Link>
                <Link to={'lilampage'}>
                  <li className="li">
                    <MdEmail className="lilamCateIcon" />
                    کمپیوتر
                  </li>
                </Link>
                <Link to={'lilampage'}>
                  <li className="li">
                    <MdEmail className="lilamCateIcon" />
                    سرگرمی
                  </li>
                </Link>
                <Link to={'lilampage'}>
                  <li className="li">
                    <MdEmail className="lilamCateIcon" />
                    املاک
                  </li>
                </Link>
                <Link to={'lilampage'}>
                  <li className="li">
                    <MdEmail className="lilamCateIcon" />
                    موتر
                  </li>
                </Link>
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
      </div>
    </>
  );
}
