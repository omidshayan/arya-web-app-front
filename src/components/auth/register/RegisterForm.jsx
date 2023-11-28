import { FaKey } from "react-icons/fa6";
import { FaUserPlus } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { MdOutlineNumbers } from "react-icons/md";

import Loading from "./../../loading/Loading";
import { Link } from "react-router-dom";
import { Formik, Field, Form } from "formik";
import "../../../i18n";
import { useTranslation } from "react-i18next";
import {registerSchema} from "../../../Validations/register";

import { postApi } from "../../../services/Api/api";
import { useState } from "react";

export default function RegisterFrom() {
  const { t } = useTranslation();

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (values, actions) => {
    setLoading(true);
    const path = "auth/register";
    try {
      const status = await postApi(path, values);
      actions.resetForm();
      setLoading(false);
      // history.push("/address")

    } catch (error) {
      setLoading(false)
    }
  };

  return (
    <>
      <div className="loginFrom">
        <div className="loginContainer">
          <div className="loginTitle">
            <div className="loginLogin">
              {t("register")}
              <span>
                <FaUserPlus className="loginIcon" />
              </span>
            </div>
            <span className="loginWelcome">{t("welcomLogin")}</span>
          </div>

          <Formik
            initialValues={{ name: "", mobile: "", email: "", password: "" }}
            onSubmit={(values, actions) => {
              handleSubmit(values, actions);
              // console.log(values);
            }}
            validationSchema={registerSchema}>
            {({ errors, touched }) => (
              <Form>
                <div className="inputLable">{t("name")}</div>
                <div className="inputItem">
                  <FaUser className="intpuIcon" />
                  <Field
                    type="text"
                    name="name"
                    placeholder={t("enterName")}
                    className="loginInput"
                  />
                </div>
                <span className="msgError">
                  {touched.name && errors.name && errors.name}
                </span>

                <div className="inputLable"> {t("mobile")}</div>
                <div className="inputItem">
                  <MdOutlineNumbers className="intpuIcon" />
                  <Field
                    type="text"
                    name="mobile"
                    placeholder={t("enterMobile")}
                    className="loginInput"
                  />
                </div>
                <span className="msgError">
                  {touched.mobile && errors.mobile && errors.mobile}
                </span>

                <div className="inputLable">{t("email")} </div>
                <div className="inputItem">
                  <MdEmail className="intpuIcon" />
                  <Field
                    type="text"
                    name="email"
                    placeholder={t("enterEmail")}
                    className="loginInput"
                  />
                </div>
                <span className="msgError">
                  {touched.email && errors.email && errors.email}
                </span>

                <div className="inputLable">{t("password")}</div>
                <div className="inputItem">
                  <FaKey className="intpuIcon" />
                  <Field
                    type="text"
                    name="password"
                    placeholder={t("passwordP")}
                    className="loginInput"
                  />
                </div>
                <span className="msgError">
                  {touched.password && errors.password && errors.password}
                </span>

                <div className="loginBottom">
                  {!loading && (
                    <div className="">
                      <input
                        className="loginBtn"
                        type="submit"
                        value={t("register")}
                      />
                    </div>
                  )}

                  {/* loading */}
                  {loading && (
                    <div className="loadinAuth">
                      <Loading />
                    </div>
                  )}

                  <div className="newUser">
                    {t("registerd")} <Link to={"/login"}>{t("logined")} </Link>
                  </div>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </>
  );
}
