import { FaKey } from "react-icons/fa6";
import { FaUserPlus } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";
import { MdOutlineNumbers } from "react-icons/md";

import './../../../i18n';
import { useTranslation } from 'react-i18next';

export default function RegisterFrom() {
    const {t} = useTranslation();
  return (
    <>
    <div className="loginFrom">
      <div className="loginContainer">
          <div className="loginTitle">
              <div className="loginLogin">{t('register')}<span><FaUserPlus className="loginIcon"/></span></div>
              <span className="loginWelcome">{t('welcomLogin')}</span>
          </div>

          <div className="inputLable">{t('name')}</div>
          <div className="inputItem">
              <FaUser className="intpuIcon"/>
              <input type="text" className="loginInput" placeholder={t('enterName')}/>
          </div>

          <div className="inputLable">  {t('mobile')}</div>
          <div className="inputItem">
              <MdOutlineNumbers className="intpuIcon"/>
              <input type="text" className="loginInput" placeholder={t('enterMobile')}/>
          </div>

          <div className="inputLable">{t('email')}  </div>
          <div className="inputItem">
              <MdEmail className="intpuIcon"/>
              <input type="text" className="loginInput" placeholder={t('enterEmail')}/>
          </div>

          <div className="inputLable">{t('password')}</div>
          <div className="inputItem">
              <FaKey className="intpuIcon"/>
              <input type="text" className="loginInput" placeholder={t('passwordP')}/>
          </div>

          <div className="loginBottom">
              <div className="">
                  <input className="loginBtn" type="submit" value={t('login')} />
              </div>
              <div className="newUser">
              {t('registerd')}   <Link to={'/login'}>{t('logined')}  </Link>
              </div>
          </div>

      </div>
    </div>
  </>
  )
}
