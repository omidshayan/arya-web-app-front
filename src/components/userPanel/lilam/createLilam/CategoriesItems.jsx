import { BiCategory } from "react-icons/bi";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { FaMobileScreenButton } from "react-icons/fa6";
import { getApi } from "../../../../services/Api/api";
import { useEffect, useState } from "react";
import Loading from "../../../loading/Loading";

export default function CategoriesItems(props) {
  const [loading, setLoading] = useState(false);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [showingCategories, setShowingCategories] = useState([]);
  // Get All Main categories
  const getAllMainCtegories = async () => {
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
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  // Get Children Categories
  const getCategoryChildren = async (category) => {
    const { data } = await getApi(`/categories/${category._id}`);
    const categoryChildren = data?.data?.children;
    
    if (!categoryChildren?.length) {
      setSelectedCategory(category);
      //modal close
      return;
    }

    setCategories(categoryChildren);
    const itemId = showingCategories.reverse()[0]?.itemId + 1;

    const newShowingCategories = categoryChildren.map((item) => {
      return {
        ...item,
        itemId,
      };
    });
    setShowingCategories([...showingCategories, ...newShowingCategories]);
  };

  const handleBack = () => {
    const showingCategoriesCopy = [...showingCategories];
    const lastItemId = showingCategoriesCopy.reverse()[0]?.itemId;
    if (lastItemId === 1) {
      setCategories([]);
      return;
    }
    const itemIdForLastCategoryVisibiled = lastItemId - 1;
    const lastShowsCat = showingCategoriesCopy.filter(
      (item) => item.itemId === itemIdForLastCategoryVisibiled
    );

    const newShowingCategories = showingCategoriesCopy.filter(
      (item) => item.itemId === lastItemId
    );
    setShowingCategories(newShowingCategories);
    setCategories(lastShowsCat.reverse());
  };

  useEffect(() => {
    let isMounted = true;

    const fetchCategories = async () => {
      if (props.searchInput) {
        setLoading(true);
        try {
          const { data } = await getApi(
            "/categories/getCategoriesWithoutChildren",
            { name: props.searchInput }
          );
          if (isMounted) {
            setCategories(data.data);
          }
        } catch (error) {
          console.log(error);
        } finally {
          if (isMounted) {
            setLoading(false);
          }
        }
      }
    };

    fetchCategories();

    return () => {
      isMounted = false;
    };
  }, [props.searchInput]);

  return (
    <>

      {!categories.length ? (
        <div className="showCatesLilam color">
          <div className="color d-flex-all" onClick={getAllMainCtegories}>
            <BiCategory className="m-l10" /> نمایش همه دسته بندی ها
          </div>
          <IoIosArrowBack />
        </div>
      ) : null}

      {categories.length ? (
        <>
          {/* loading */}
          {loading ? (
            <div className="loadinAuth">
              <Loading />
            </div>
          ) : null}

          {/* Main categories */}
          {/* {showPrentsCategories? */}
          {categories.map((category) => {
            return (
              <>
                <div
                  key={category._id}
                  className="showCatesLilam color"
                  onClick={() => getCategoryChildren(category)}
                >
                  <div className="color d-flex-all">
                    <FaMobileScreenButton className="m-l10" />
                    <span>{category.name}</span>
                  </div>
                  {category.children ? <IoIosArrowBack /> : null}
                </div>
              </>
            );
          })}
          {/* :null} */}

          {/* Show Children Categories */}
          {categories.length ? (
            <div className="showCatesLilam color" onClick={handleBack}>
              <div className="sub-color d-flex-all">
                <IoIosArrowForward className="m-l10" /> برگشت
              </div>
            </div>
          ) : null}
        </>
      ) : null}
    </>
  );
}
