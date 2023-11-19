import { FaKey } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

import './../../../i18n';
import { useTranslation } from 'react-i18next';

import "./loginForm.css";
import { Link } from "react-router-dom";

export default function LoginFrom() {
  const {t} = useTranslation();
  return (
    <>
      <div className="loginFrom">
        <div className="loginContainer">
          
            <div className="loginTitle">
                <div className="loginLogin">{t('login')} <span><FaKey className="loginIcon"/></span></div>
                <span className="loginWelcome">{t('welcomLogin')}</span>
            </div>

            <div className="inputLable">{t('emailOrMobile')}</div>
            <div className="inputItem">
                <MdEmail className="intpuIcon"/>
                <input type="text" className="loginInput" placeholder={t('emailOrMobileP')}/>
            </div>

            <div className="inputLable">{t('password')}</div>
            <div className="inputItem">
                <FaKey className="intpuIcon"/>
                <input type="text" className="loginInput" placeholder={t('passwordP')}/>
            </div>

            <div className="loginBottom">
                <Link to={'/forgate'}><div className="forgetText">{t('forgatPassword')}</div></Link>
                <div className="">
                    <input className="loginBtn" type="submit" value={t('login')} />
                </div>
                <div className="newUser">
                    {t('addNewUser')}<Link to={'/register'}>{t('register')} </Link>
                </div>
            </div>

        </div>
      </div>
    </>
  );
}
