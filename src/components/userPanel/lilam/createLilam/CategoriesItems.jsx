import { BiCategory } from "react-icons/bi";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { FaMobileScreenButton } from "react-icons/fa6";
import { getApi } from "../../../../services/Api/api";
import { useEffect, useState } from "react";
import Loading from "../../../loading/Loading";

export default function CategoriesItems() {
  const [loading, setLoading] = useState(false);
  const [categories, setCategories] = useState([]);
  const [showingCategories, setShowingCategories] = useState([]);


  // get all main categories
  const getAllMainCategories = async () => {
    setLoading(true);
    const path = "/categories/withoutPaginate";
    try {
      const { data } = await getApi(path, { mainCategories: 1 });
      const categoriesData = data.data;
      setCategories(categoriesData);

      const itemId = 1;
      const ss = categoriesData.map((item) => {
        return {
          ...item,
          itemId,
        };
      });
      setShowingCategories(ss);
    } catch (error) {
      //end try

      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  // get categories children
  const getCategoryChildren = async (item) =>{
    const {data} = await getApi(`/categories/${item._id}`);
    const categoryChildren = data?.data?.children;
    setCategories(categoryChildren)

    const itemId = showingCategories.reverse()[0]?.itemId + 1;
    const newShowingCategories = categoryChildren.map((item) => {
      return {
        ...item,
        itemId,
      };
    });
    setShowingCategories([...showingCategories, ...newShowingCategories]);

    console.log(showingCategories)
    
  }

  return (
    <>
      {!categories.length ? (
        <div className="showCatesLilam color" onClick={getAllMainCategories}>
          <div className="color d-flex-all">
            <BiCategory className="m-l10" /> نمایش همه دسته بندی ها
          </div>
          <IoIosArrowBack />
        </div>
      ) : null}

      {loading && (
        <div className="loadinAuth">
          <Loading />
        </div>
      )}

      {categories.length > 0 && (
        <>
          {categories.map((item) => {
            return (
              <>
                <div className="showCatesLilam color" key={item._id} onClick={() => getCategoryChildren(item)}>
                  <div className="color d-flex-all">
                    <FaMobileScreenButton className="m-l10" />
                    <span>{item.name}</span>
                  </div>
                  <IoIosArrowBack />
                </div>
              </>
            );
          })}

          <div className="showCatesLilam color" onClick={getAllMainCategories}>
            <div className="sub-color d-flex-all">
              <IoIosArrowForward className="m-l10" /> برگشت
            </div>
          </div>
        </>
      )}
    </>
  );
}
