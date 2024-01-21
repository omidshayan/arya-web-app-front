import UserContent from "../../userContent/UserContent";
import { useState } from "react";
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

export default function CreateLilam() {
  const { t } = useTranslation();
  const [loading, setLoading] = useState(false);
  const [searchInput, setSearchInput] = useState(null);
  const [ProfileImage, setProfileImage] = useState();




  return (
    <>
      <UserContent title={"ثبت کالای لیلامی"}>
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
                    <Modal
                      title="انتخاب دسته بندی"
                      modalName="انتخاب دسته بندی"
                    >
                      <div className="inputParent">
                        <div className="backInputCate d-flex-align">
                          <CiSearch className="inputIcon" />
                          <Field
                            type="text"
                            name="cateSearch"
                            className="loginInput"
                            placeholder="جستجوی دسته بندی..."
                            onChange={(e) => setSearchInput(e.target.value)}
                            value={searchInput}
                          />
                        </div>
                      </div>

                      {/* categories items */}
                      <CategoriesItems
                        searchInput={searchInput}
                        
                      />
                    </Modal>
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
