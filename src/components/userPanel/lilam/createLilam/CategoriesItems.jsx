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
  const [showCates, setShowCates] = useState(true);
  const [loading, setLoading] = useState(false);

  // children categoies
  // const getCategoryChildren = async (category) => {
  //   setLoading(true);
  //   const path = `categories/${category.id}`;
  //   try {
  //     const { data } = await getApi(path);
  //     setLoading(false);
  //     setGacegories(data.data);
  //   } catch (error) {
  //     // console.log(error);
  //     setLoading(false);
  //   }
  // };

  // main category
  // const getAllMainCtegories = async () => {
  //   setLoading(true);
  //   const path = "categories";

  //   try {
  //     const { data } = await getApi(path, {mainCategories: 1});
  //     setLoading(false);
  //     setGacegories(data.data);
  //   } catch (error) {
  //     // console.log(error);
  //     setLoading(false);
  //   }
  // };

  const showCateHandle = () => {
    setShowCates(false);
  };

  const [categories, setGacegories] = useState([]);

  const showCatesHandle = async () => {
    setLoading(true);
    const path = "categories";

    try {
      const { data } = await getApi(path);
      setLoading(false);
      setGacegories(data.data);
    } catch (error) {
      // console.log(error);
      setLoading(false);
    }
  };

  return (
    <>
      {showCates && (
        <div className="showCatesLilam color" onClick={showCateHandle}>
          <div className="color d-flex-all" onClick={showCatesHandle}>
            <BiCategory className="m-l10" /> نمایش همه دسته بندی ها
          </div>
          <IoIosArrowBack />
        </div>
      )}

      {!showCates && (
        <>
          <div
            className="showCatesLilam color"
            onClick={() => setShowCates(true)}
          >
            <div className="sub-color d-flex-all">
              <IoIosArrowForward className="m-l10" /> برگشت
            </div>
          </div>

          {/* loading */}
          {loading && (
            <div className="loadinAuth">
              <Loading />
            </div>
          )}

          <div className="showCatesLilam color">
            <div className="color d-flex-all">
              <FaMobileScreenButton className="m-l10" />
              {categories.map((category) => {
                return (
                  <>
                    <span onClick={() => showCatesHandle(category)}>
                      {category.name}
                    </span>
                  </>
                );
              })}
            </div>
            <IoIosArrowBack />
          </div>

          <div className="showCatesLilam color">
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
          </div>
        </>
      )}
    </>
  );
}
