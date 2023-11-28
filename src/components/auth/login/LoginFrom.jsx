import { FaKey } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

import "./../../../i18n";
import { useTranslation } from "react-i18next";
import Loading from "./../../loading/Loading";
import { setCookie } from "./../../../services/cookie"; // تغییر مسیر به مسیر واقعی فایل

import "./loginForm.css";
import { Link, useNavigate } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import { loginSchema } from "../../../Validations/register";
import { useState } from "react";
import { postApi, getApi } from "../../../services/Api/api";

export default function LoginFrom() {
  const { t } = useTranslation();


  const isAutorize = async () => {
    const path = "auth/isAutorize";
    try {
      const data = await getApi(path)
      console.log(data)

    } catch (error) {
      console.log(error)
    }
  }

  const [loading, setLoading] = useState(false);

  // const navigate = useNavigate();
  const handleSubmit = async (values, actions) => {
    setLoading(true)
    const path = "auth/login";
    const body = values;

    try {
      const  { status, data } = await postApi(path, body);

      setCookie('accessToken', data.data.accessToken)
      setCookie('refreshToken', data.data.refreshToken)
      console.log(data.data.accessToken)
      isAutorize()
      actions.resetForm();
      // console.log(values);
      console.log(data)

      // navigate("/")
      setLoading(false)
    } catch (error) {
      // console.log(error);
      setLoading(false)
    }
  };

  return (
    <>
      <div className="loginFrom">
        <div className="loginContainer">
          <div className="loginTitle">
            <div className="loginLogin">
              {t("login")}{" "}
              <span>
                <FaKey className="loginIcon" />
              </span>
            </div>
            <span className="loginWelcome">{t("welcomLogin")}</span>
          </div>

          <Formik
            initialValues={{ emailOrMobile: "", password: "" }}
            onSubmit={(values, actions) => {
              handleSubmit(values, actions);
              // console.log(values);
            }}
            validationSchema={loginSchema}
          >
            {({ touched, errors }) => (
              <Form>
                <div className="inputLable">{t("emailOrMobile")}</div>
                <div className="inputItem">
                  <MdEmail className="intpuIcon" />
                  <Field
                    type="text"
                    name="emailOrMobile"
                    className="loginInput"
                    placeholder={t("emailOrMobileP")}
                  />
                </div>
                <span className="msgError">
                  {touched.emailOrMobile &&
                    errors.emailOrMobile &&
                    errors.emailOrMobile}
                </span>

                <div className="inputLable">{t("password")}</div>
                <div className="inputItem">
                  <FaKey className="intpuIcon" />
                  <Field
                    type="text"
                    name="password"
                    className="loginInput"
                    placeholder={t("passwordP")}
                  />
                </div>
                <span className="msgError">
                  {" "}
                  {touched.password && errors.password && errors.password}
                </span>

                <div className="loginBottom">
                  <Link to={"/forgate"}>
                    <div className="forgetText">{t("forgatPassword")}</div>
                  </Link>

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
                    {t("addNewUser")}
                    <Link to={"/register"}>{t("register")} </Link>
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
