import { FaKey } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

import "./../../../i18n";
import { useTranslation } from "react-i18next";

import "./loginForm.css";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import authSchema from "../../../Validations/register";

export default function LoginFrom() {

const loginForm = useFormik({
  initialValues: {email: '', password: ''},

  onSubmit: (values, { setSubmitting} ) => {
    console.log(values);
  },

  validationSchema: authSchema,
})



  const { t } = useTranslation();
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
          
              <form onSubmit={loginForm.handleSubmit}>
                <div className="inputLable">{t("emailOrMobile")}</div>
                <div className="inputItem">
                  <MdEmail className="intpuIcon" />
                  <input
                    type="text"
                    name="email"
                    value={loginForm.values.email}
                    onChange={loginForm.handleChange}
                    onBlur={loginForm.handleBlur}
                    className="loginInput"
                    placeholder={t("emailOrMobileP")}
                  />
                </div>
                  <span className="msgError">{loginForm.errors.email && loginForm.touched.email && loginForm.errors.email}</span>

                <div className="inputLable">{t("password")}</div>
                <div className="inputItem">
                  <FaKey className="intpuIcon" />
                  <input
                    type="password"
                    name="password"
                    value={loginForm.values.password}
                    onChange={loginForm.handleChange}
                    onBlur={loginForm.handleBlur}
                    className="loginInput"
                    placeholder={t("passwordP")}
                  />
                </div>
                  <span className="msgError">{loginForm.errors.password && loginForm.touched.password && loginForm.errors.password}</span>

                <div className="loginBottom">
                  <Link to={"/forgate"}>
                    <div className="forgetText">{t("forgatPassword")}</div>
                  </Link>
                  <div className="">
                    <input
                      className="loginBtn"
                      type="submit"
                      value={t("login")}
                    />
                  </div>
                  <div className="newUser">
                    {t("addNewUser")}
                    <Link to={"/register"}>{t("register")} </Link>
                  </div>
                </div>
              </form>

        </div>
      </div>
    </>
  );
}
