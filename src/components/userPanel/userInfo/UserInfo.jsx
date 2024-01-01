import { useState, useContext } from "react";
import UserContent from "../userContent/UserContent";
import "./UserInfo.css";
import { Formik, Form, Field } from "formik";
import { Helmet } from "react-helmet";
import { MdEmail } from "react-icons/md";
import { userInfo } from "./../../../Validations/register";
import Loading from "./../../loading/Loading";
import { useTranslation } from "react-i18next";
import UserContext from "./../../../Context/UserContext";
import { FaUser } from "react-icons/fa";
import { FaMobileAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaInfo } from "react-icons/fa";

import ImageUploader from "react-images-upload";

export default function UserInfo() {
  const { userData } = useContext(UserContext);
  const { t } = useTranslation();
  const [loading, setLoading] = useState(false);

  const [profileImage, setProfileImage] = useState();

  return (
    <>
      <UserContent title="مشخصات من">
        <Helmet>
          <title> مشخصات پنل کاربری</title>
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
          }}
          validationSchema={userInfo}
        >
          {({ touched, errors }) => (
            <Form>
              <div className="userInfo">
                <div className="inputParent">
                  <div className="inputTitle">نام و تخلص</div>
                  <div className="backInput d-flex-align">
                    <FaUser className="inputIcon" />
                    <Field
                      type="text"
                      name="name"
                      value={userData?.name}
                      className="loginInput"
                      placeholder={t("name")}
                    />
                  </div>
                  <span className="msgError">
                    {touched.name && errors.name && errors.name}
                  </span>
                </div>

                <div className="inputParent">
                  <div className="inputTitle">ایمیل</div>
                  <div className="backInput d-flex-align">
                    <MdEmail className="inputIcon" />
                    <Field
                      type="email"
                      name="email"
                      value={userData.email}
                      className="loginInput"
                      placeholder={t("email")}
                    />
                  </div>
                  <span className="msgError">
                    {touched.email && errors.email && errors.email}
                  </span>
                </div>

                <div className="inputParent">
                  <div className="inputTitle">موبایل</div>
                  <div className="backInput d-flex-align">
                    <FaMobileAlt className="inputIcon" />
                    <Field
                      type="number"
                      name="mobile"
                      value={userData.mobile}
                      className="loginInput"
                      placeholder={t("mobile")}
                    />
                  </div>
                  <span className="msgError">
                    {touched.mobile && errors.mobile && errors.mobile}
                  </span>
                </div>

                <div className="inputParent">
                  <div className="inputTitle">آدرس</div>
                  <div className="backInput d-flex-align">
                    <FaLocationDot className="inputIcon" />
                    <Field
                      type="text"
                      name="address"
                      value={userData?.address}
                      className="loginInput"
                      placeholder={t("emailOrMobileP")}
                    />
                  </div>
                </div>

                <div className="inputParent">
                  <div className="inputTitle">معرفی کوتاه</div>
                  <div className="backInput d-flex-align">
                    <FaInfo className="inputIcon" />
                    <Field
                      type="text"
                      name="shortDesc"
                      value={userData?.shortDesc}
                      className="loginInput"
                      placeholder={t("emailOrMobileP")}
                    />
                  </div>
                </div>
              </div>

              <div className="Profiletitle">اضافه کردن عکس</div>
              <div className="UserProfile">
                <ImageUploader
                  className="tt"
                  withIcon={true}
                  withPreview={true}
                  buttonText="انتخاب عکس "
                  imgExtension={[".jpg", ".gif", ".png", ".gif"]}
                  maxFileSize={1000000}
                  maxNumber="1"
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
      </UserContent>
    </>
  );
}
