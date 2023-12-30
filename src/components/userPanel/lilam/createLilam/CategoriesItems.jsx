import { BiCategory } from "react-icons/bi";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { FaMobileScreenButton } from "react-icons/fa6";
import { getApi } from "../../../../services/Api/api";
import {  useState } from "react";
import Loading from "../../../loading/Loading";

export default function CategoriesItems() {
  const [back, setBack] = useState(false);

  const [loading, setLoading] = useState(false);

  const [showCategories, setShowCategories] = useState(true);



  const [maincategories, setMainCegories] = useState([]);
  const [categories, setCategories] = useState([]);
  
  const [showPrentsCategories, setShowPrentsCegories] = useState(true);

  const [Children, setChildren] = useState([]);

  const [selectedCategory, setSelectedCategory] = useState([]);

  // Get All Main categories
  const getAllMainCtegories = async () => {
    setLoading(true);
    setShowPrentsCegories(true);
    setChildren([]);
    setBack(false);
    const path = "/categories/withoutPaginate";
    try {
      const { data } = await getApi(path, { mainCategories: 1 });
      setLoading(false);
      setMainCegories(data.data);
    } catch (error) {
      // console.log(error);
      setLoading(false);
    }
  };

  // Get Children Categories
  const getCategoryChildren = async (category) => {
    console.log('main line 43',category)
    setSelectedCategory(category);
    console.log(selectedCategory);
    setLoading(true);
    setBack(true);
    const path = `/categories/${category.id}`;
    try {
      const { data } = await getApi(path);
      setShowPrentsCegories(false);
      setChildren(data.data.children);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };


  const showMainCategories = () => {
    setShowCategories(false);
  };

  return (
    <>
      {showCategories && (
        <div className="showCatesLilam color" onClick={showMainCategories}>
          <div className="color d-flex-all" onClick={getAllMainCtegories}>
            <BiCategory className="m-l10" /> نمایش همه دسته بندی ها
          </div>
          <IoIosArrowBack />
        </div>
      )}

      {!showCategories && (
        <>
          {/* loading */}
          {loading && (
            <div className="loadinAuth">
              <Loading />
            </div>
          )}

          {/* Main categories */}
          {showPrentsCategories &&
            maincategories.map((category) => {
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
          {Children.map((category) => {
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
