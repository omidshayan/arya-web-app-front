import { FaKey } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

import "../../../i18n";
import { useTranslation } from "react-i18next";

import { Link } from "react-router-dom";
import { Formik, Field, Form } from "formik";
import { forgetPassSchema } from "../../../Validations/register";

export default function ForgateForm() {
  const { t } = useTranslation();

//   const handleSubmit = () => {};
  return (
    <>
      <div className="loginFrom">
        <div className="loginContainer">
          <div className="loginTitle">
            <div className="loginLogin">
              {t("forgatePassForm")}{" "}
              <span>
                <FaKey className="loginIcon" />
              </span>
            </div>
          </div>
          <Formik
            initialValues={{ email:""}}
            onSubmit={(values, actions) => {
            //   handleSubmit(values, actions);
              console.log(values);
            }}
            validationSchema={forgetPassSchema}
          >
             {({ errors, touched }) => (
              <Form>
                <div className="inputLable">{t("email")}</div>
                <div className="inputItem">
                  <MdEmail className="inputIcon" />
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


                <div className="loginBottom">
                  <div className="">
                    <input
                      className="loginBtn"
                      type="submit"
                      value={t("login")}
                    />
                  </div>
                  <div className="newUser">
                    {t("backToPage")}
                    <Link to={"/login"}>{t("login")} </Link>/{" "}
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
