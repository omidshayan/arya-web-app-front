import { BiCategory } from "react-icons/bi";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { FaMobileScreenButton } from "react-icons/fa6";
import { MdOutlineArticle } from "react-icons/md";
import { FaCar } from "react-icons/fa";
import { TbBuildingEstate } from "react-icons/tb";
import { BiSolidCameraHome } from "react-icons/bi";
import { getApi } from "../../../../services/Api/api";
import { useState } from "react";
import Loading from "../../../loading/Loading";

export default function CategoriesItems() {
  const [back, setBack] = useState(false);

  const [showAllCategories, setShowAllCategories] = useState(true);
  const [loading, setLoading] = useState(false);

  const [categories, setGacegories] = useState([]);
  const [showPrentsCategories, setShowPrentsCegories] = useState(true);
  const [getChildren, setGetChildren] = useState([]);

  // Get All Main categories
  const getAllMainCtegories = async () => {
    setLoading(true);
    setShowPrentsCegories(true);
    setGetChildren([]);
    setBack(false);
    const path = "/categories/withoutPaginate";
    try {
      const { data } = await getApi(path, { mainCategories: 1 });
      setLoading(false);
      setGacegories(data.data);
    } catch (error) {
      // console.log(error);
      setLoading(false);
    }
  };

  // Get Children Categories
  const getCategoryChildren = async (category) => {
    setLoading(true);
    setBack(true);
    const path = `/categories/${category.id}`;
    try {
      const { data } = await getApi(path);
      setShowPrentsCegories(false);
      setGetChildren(data.data.children);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  const showMainCategories = () => {
    setShowAllCategories(false);
  };

  return (
    <>
      {showAllCategories && (
        <div className="showCatesLilam color" onClick={showMainCategories}>
          <div className="color d-flex-all" onClick={getAllMainCtegories}>
            <BiCategory className="m-l10" /> نمایش همه دسته بندی ها
          </div>
          <IoIosArrowBack />
        </div>
      )}

      {!showAllCategories && (
        <>
          {/* loading */}
          {loading && (
            <div className="loadinAuth">
              <Loading />
            </div>
          )}

          {/* Main categories */}
          {showPrentsCategories &&
            categories.map((category) => {
              return (
                <>
                  <div className="showCatesLilam color">
                    <div className="color d-flex-all">
                      <FaMobileScreenButton className="m-l10" />
                      <span onClick={() => getCategoryChildren(category)}>
                        {category.name}
                      </span>
                    </div>
                    <IoIosArrowBack />
                  </div>
                </>
              );
            })}

          {/* Show Children Categories */}
          {back && (
            <div className="showCatesLilam color" onClick={getAllMainCtegories}>
              <div className="sub-color d-flex-all">
                <IoIosArrowForward className="m-l10" /> برگشت
              </div>
            </div>
          )}
          {getChildren.map((category) => {
            return (
              <>
                <div className="showCatesLilam color">
                  <div className="color d-flex-all">
                    <FaMobileScreenButton className="m-l10" />
                    <span onClick={() => getCategoryChildren(category)}>
                      {category.name}
                    </span>
                  </div>
                  <IoIosArrowBack />
                </div>
              </>
            );
          })}

          {/* <div className="showCatesLilam color">
            <div className="color d-flex-all">
              <FaMobileScreenButton className="m-l10" /> موبایل و تبلت
            </div>
            <IoIosArrowBack />
          </div>
          <div className="showCatesLilam color">
            <div className="color d-flex-all">
              <BiCategory className="m-l10" /> کامپیوتر
            </div>
            <IoIosArrowBack />
          </div>
          <div className="showCatesLilam color">
            <div className="color d-flex-all">
              <BiSolidCameraHome className="m-l10" /> لوازم خانه
            </div>
            <IoIosArrowBack />
          </div>
          <div className="showCatesLilam color">
            <div className="color d-flex-all">
              <FaCar className="m-l10" /> وسیله نقلیه
            </div>
            <IoIosArrowBack />
          </div>
          <div className="showCatesLilam color">
            <div className="color d-flex-all">
              <TbBuildingEstate className="m-l10" /> خانه و زمین
            </div>
            <IoIosArrowBack />
          </div>
          <div className="showCatesLilam color">
            <div className="color d-flex-all">
              <MdOutlineArticle className="m-l10" /> لوازم التحریر
            </div>
            <IoIosArrowBack />
          </div> */}
        </>
      )}
    </>
  );
}
