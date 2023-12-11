import React from "react";
import UserContent from "../../userContent/UserContent";

import { useState, useContext } from "react";
import { Formik, Form, Field } from "formik";
import { Helmet } from "react-helmet";
import { MdEmail } from "react-icons/md";
import { userInfo } from "./../../../../Validations/register";
import Loading from "./../../../loading/Loading";
import { useTranslation } from "react-i18next";
import Modal from "./../../../main/modal/Modal";
import AutoComplete from './../../../main/autoComplete/AutoComplete';

import "./CreateLilam.css";

export default function CreateLilam() {
  const { t } = useTranslation();
  const [loading, setLoading] = useState(false);

  const [ProfileImage, setProfileImage] = useState();
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
                  <Modal title="انتخاب دسته بندی" modalName="انتخاب دسته بندی">
                    <AutoComplete/>
                  </Modal>
                </div>
                <div className="userInfo">
                  <div className="inputParent">
                    <div className="inputTitle">نام کالا</div>
                    <div className="backInput d-flex-align">
                      <MdEmail className="intpuIcon" />
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
                      <MdEmail className="intpuIcon" />
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
                      <MdEmail className="intpuIcon" />
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
                      <MdEmail className="intpuIcon" />
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
                      <MdEmail className="intpuIcon" />
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
                <div className="UserProfile">
               
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
