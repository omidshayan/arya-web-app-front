import UserContent from "../../userContent/UserContent";

import { useState, useContext } from "react";
import { Formik, Form, Field } from "formik";
import { Helmet } from "react-helmet";
import { MdEmail } from "react-icons/md";
import { userInfo } from "./../../../../Validations/register";
import Loading from "./../../../loading/Loading";
import { useTranslation } from "react-i18next";
import ConfirmModal from './../../../main/modals/ConfirmModal';


import { CiSearch } from "react-icons/ci";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { BiCategory } from "react-icons/bi";
import { FaMobileScreenButton } from "react-icons/fa6";
import { MdOutlineArticle } from "react-icons/md";
import { FaCar } from "react-icons/fa";
import { TbBuildingEstate } from "react-icons/tb";
import { BiSolidCameraHome } from "react-icons/bi";

import "./CreateLilam.css";

export default function CreateLilam() {
  const { t } = useTranslation();
  const [loading, setLoading] = useState(false);
  const [showCates, setShowCates] = useState(true);

  const [ProfileImage, setProfileImage] = useState();

  const showCateHandle = () => {
    setShowCates(false);
  };
  return (
    <>
      <UserContent title={"ثبت کالای لیلامی"}>
        <div className="createLilam">
          <Helmet>
            <title>ثبت لیلامی</title>
          </Helmet>

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
                  <ConfirmModal modalName='انتخاب دسته بندی' modalTitle='انتخاب دسته بندی'/>
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

                <div className="Profiletitle">اضافه کردن عکس</div>
                <div className="UserProfile"></div>

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
