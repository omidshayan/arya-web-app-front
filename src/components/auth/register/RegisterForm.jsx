import { FaKey } from "react-icons/fa6";
import { FaUserPlus } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";
import { MdOutlineNumbers } from "react-icons/md";
import { useFormik } from "formik";
import "../../../i18n";
import { useTranslation } from "react-i18next";
import authSchema from "../../../Validations/register";

export default function RegisterFrom() {
  const { t } = useTranslation();

  const registerForm = useFormik({
    initialValues: { name: "", number: "", email: "", password: "" },

    onSubmit: (values, { setSubmit }) => {
      console.log(values);
    },

    validationSchema: authSchema,
  });

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

          <form onSubmit={registerForm.handleSubmit}>
            <div className="inputLable">{t("name")}</div>
            <div className="inputItem">
              <FaUser className="intpuIcon" />
              <input
                type="text"
                name="name"
                value={registerForm.values.name}
                onChange={registerForm.handleChange}
                onBlur={registerForm.handleBlur}
                className="loginInput"
                placeholder={t("enterName")}
              />
            </div>
            <span className="msgError">
              {registerForm.errors.name &&
                registerForm.touched.name &&
                registerForm.errors.name}
            </span>

            <div className="inputLable"> {t("mobile")}</div>
            <div className="inputItem">
              <MdOutlineNumbers className="intpuIcon" />
              <input
                type="number"
                name="number"
                value={registerForm.values.number}
                onChange={registerForm.handleChange}
                onBlur={registerForm.handleBlur}
                className="loginInput"
                placeholder={t("enterMobile")}
                maxLength={10}
              />
            </div>
            <span className="msgError">
              {registerForm.errors.number &&
                registerForm.touched.number &&
                registerForm.errors.number}
            </span>

            <div className="inputLable">{t("email")} </div>
            <div className="inputItem">
              <MdEmail className="intpuIcon" />
              <input
                type="text"
                name="email"
                value={registerForm.values.email}
                onChange={registerForm.handleChange}
                onBlur={registerForm.handleBlur}
                className="loginInput"
                placeholder={t("enterEmail")}
              />
            </div>
            <span className="msgError">
              {registerForm.errors.email &&
                registerForm.touched.email &&
                registerForm.errors.email}
            </span>

            <div className="inputLable">{t("password")}</div>
            <div className="inputItem">
              <FaKey className="intpuIcon" />
              <input
                type="text"
                name="password"
                value={registerForm.values.password}
                onChange={registerForm.handleChange}
                onBlur={registerForm.handleBlur}
                className="loginInput"
                placeholder={t("passwordP")}
              />
            </div>
            <span className="msgError">
              {registerForm.errors.password &&
                registerForm.touched.password &&
                registerForm.errors.password}
            </span>

            <div className="loginBottom">
              <div className="">
                <input className="loginBtn" type="submit" value={t("login")} />
              </div>

              <div className="newUser">
                {t("registerd")} <Link to={"/login"}>{t("logined")} </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
