import { useState, useContext } from "react";
import UserContent from "../userContent/UserContent";
import "./UserInfo.css";
import { Formik, Form, Field } from "formik";
import { Helmet } from "react-helmet";
import { FaKey } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { userInfo } from "./../../../Validations/register";
import Loading from "./../../loading/Loading";
import { useTranslation } from "react-i18next";
import ImageUploader from "react-image-upload";
import "react-image-upload/dist/index.css";
import UserContext from './../../../Context/UserContext';


export default function UserInfo() {
  
  const {userData} = useContext(UserContext);
  const { t } = useTranslation();
  const [loading, setLoading] = useState(false);


  const [ProfileImage, setProfileImage] = useState();

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
            console.log(values);
          }}
          validationSchema={userInfo}
        >
          {({ touched, errors }) => (
            <Form>
              <div className="userInfo">
                <div className="inputParent">
                  <div className="inputTitle">نام و تخلص</div>
                  <div className="backInput d-flex-align">
                    <MdEmail className="intpuIcon" />
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
                    <MdEmail className="intpuIcon" />
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
                    <MdEmail className="intpuIcon" />
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
                    <MdEmail className="intpuIcon" />
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
                    <MdEmail className="intpuIcon" />
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
              

              <ImageUploader
                style={{
                  height: 200,
                  width: 200,
                  background: "rgb(0 182 255)",
                }}
                deleteIcon={<MdEmail />}
                uploadIcon={<MdEmail />}
              />




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