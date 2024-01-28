import UserContent from "../../userContent/UserContent";
import { useEffect, useState } from "react";
import { Formik, Form, Field } from "formik";
import { MdEmail } from "react-icons/md";
import { userInfo } from "./../../../../Validations/register";
import Loading from "./../../../loading/Loading";
import { useTranslation } from "react-i18next";
import Modal from "./../../../main/modal/Modal";
import { CiSearch } from "react-icons/ci";
import ImageUploader from "react-images-upload";
import "./CreateLilam.css";
import CategoriesItems from "./CategoriesItems";

// modal items
import { BiCategory } from "react-icons/bi";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { FaMobileScreenButton } from "react-icons/fa6";
import { getApi } from "../../../../services/Api/api";
import PropTypes from "prop-types";

// modal
import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";

// open modal
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function CreateLilam() {
  const { t } = useTranslation();
  const [loading, setLoading] = useState(false);
  const [searchInput, setSearchInput] = useState(null);
  const [ProfileImage, setProfileImage] = useState();

  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [showingCategories, setShowingCategories] = useState([]);

  // open modal
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // modal items
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
      setSelectedCategory(category.name);

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

  const back = () => {
    onModalClose(false);
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
      if (searchInput) {
        setLoading(true);
        try {
          const { data } = await getApi(
            "/categories/getCategoriesWithoutChildren",
            { name: searchInput }
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
  }, [searchInput]);

  return (
    <>
      <UserContent title={"ثبت کالای لیلامی"}>
        <div>test</div>
        <div className="createLilam">
          <Formik
            initialValues={{
              name: "",
              mobile: "",
              email: "",
              address: "",
              shortDesc: "",
            }}
            onSubmit={(values, actions) => {
              //   handleSubmit(values, actions);
              console.log(values);
            }}
            validationSchema={userInfo}
          >
            {({ touched, errors }) => (
              <Form>
                <div className="d-flex-justify">
                  <Button
                    className="cateLilam"
                    variant="outlined"
                    onClick={handleClickOpen}
                  >
                    انتخاب دسته بندی
                  </Button>
                  
                  <Dialog
                    open={open}
                    TransitionComponent={Transition}
                    keepMounted
                    onClose={handleClose}
                    aria-describedby="alert-dialog-slide-description"
                  >
                    <DialogTitle className="modalStyle">
                      انتخاب دسته بندی
                    </DialogTitle>
                    <DialogContent className="modalStyle">
                      <DialogContentText id="alert-dialog-slide-description">
                        {!categories.length ? (
                          <div className="showCatesLilam color">
                            <div
                              className="color d-flex-all"
                              onClick={getAllMainCtegories}
                            >
                              <BiCategory className="m-l10" /> نمایش همه دسته
                              بندی ها
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
                                    onClick={() =>
                                      getCategoryChildren(category)
                                    }
                                  >
                                    <div className="color d-flex-all">
                                      <FaMobileScreenButton className="m-l10" />
                                      <span>{category.name}</span>
                                    </div>
                                    {category.children ? (
                                      <IoIosArrowBack />
                                    ) : null}
                                  </div>
                                </>
                              );
                            })}
                            {/* :null} */}

                            {/* Show Children Categories */}
                            {categories.length ? (
                              <div
                                className="showCatesLilam color"
                                onClick={handleBack}
                              >
                                <div
                                  className="sub-color d-flex-all"
                                  onClick={back}
                                >
                                  <IoIosArrowForward className="m-l10" /> برگشت
                                </div>
                              </div>
                            ) : null}
                          </>
                        ) : null}
                      </DialogContentText>
                    </DialogContent>
                    <DialogActions className="modalStyle">
                      <Button onClick={handleClose}>انجام شد</Button>
                    </DialogActions>
                  </Dialog>
                </div>

                <div className="userInfo">
                  <div className="inputParent">
                    <div className="inputTitle">نام کالا</div>
                    <div className="backInput d-flex-align">
                      <MdEmail className="inputIcon" />
                      <Field
                        type="text"
                        name="name"
                        className="loginInput"
                        placeholder={t("name")}
                      />
                    </div>
                    <span className="msgError">
                      {touched.name && errors.name && errors.name}
                    </span>
                  </div>

                  <div className="inputParent">
                    <div className="inputTitle">انتخاب دسته بندی</div>
                    <div className="backInput d-flex-align">
                      <MdEmail className="inputIcon" />
                      <Field
                        type="email"
                        name="email"
                        className="loginInput"
                        placeholder={t("email")}
                      />
                    </div>
                    <span className="msgError">
                      {touched.email && errors.email && errors.email}
                    </span>
                  </div>

                  <div className="inputParent">
                    <div className="inputTitle">قیمت</div>
                    <div className="backInput d-flex-align">
                      <MdEmail className="inputIcon" />
                      <Field
                        type="number"
                        name="mobile"
                        className="loginInput"
                        placeholder={t("mobile")}
                      />
                    </div>
                    <span className="msgError">
                      {touched.mobile && errors.mobile && errors.mobile}
                    </span>
                  </div>

                  <div className="inputParent">
                    <div className="inputTitle">توضیحات</div>
                    <div className="backInput d-flex-align">
                      <MdEmail className="inputIcon" />
                      <Field
                        type="text"
                        name="address"
                        className="loginInput"
                        placeholder={t("emailOrMobileP")}
                      />
                    </div>
                  </div>

                  <div className="inputParent">
                    <div className="inputTitle">مشخصات</div>
                    <div className="backInput d-flex-align">
                      <MdEmail className="inputIcon" />
                      <Field
                        type="text"
                        name="shortDesc"
                        className="loginInput"
                        placeholder={t("emailOrMobileP")}
                      />
                    </div>
                  </div>
                </div>

                <div className="UserProfile">
                  <ImageUploader
                    className="tt"
                    withIcon={true}
                    withPreview={true}
                    buttonText="انتخاب عکس "
                    imgExtension={[".jpg", ".gif", ".png", ".gif"]}
                    maxFileSize={1000000}
                    maxNumber="5"
                    onChange={(e) => {
                      console.log(e);
                      setProfileImage(e);
                    }}
                    type="file"
                    label="حجم عکس از 1 ام بی نباید بیشتر باشد. فرمت عکس ( jpg - png - gif )"
                    fileSizeError="حجم عکس بیش از حد مجاز است"
                    fileTypeError="انتخاب فرمت اشتباه"
                  />
                </div>

                {!loading && (
                  <div className="">
                    <input className="loginBtn" type="submit" value={"ثبت"} />
                  </div>
                )}

                {/* loading */}
                {loading && (
                  <div className="loadinAuth">
                    <Loading />
                  </div>
                )}
              </Form>
            )}
          </Formik>
        </div>
      </UserContent>
    </>
  );
}
CategoriesItems.propTypes = {
  searchInput: PropTypes.string,
};
