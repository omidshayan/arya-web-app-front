import { FaKey } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

import './../../../i18n';
import { useTranslation } from 'react-i18next';

import { Link } from "react-router-dom";

export default function ForgateForm() {
    const {t} = useTranslation();
    
  return (
    <>
    <div className="loginFrom">
      <div className="loginContainer">
        
          <div className="loginTitle">
              <div className="loginLogin">{t('forgatePassForm')} <span><FaKey className="loginIcon"/></span></div>
          </div>

          <div className="inputLable">{t('email')}</div>
          <div className="inputItem">
              <MdEmail className="intpuIcon"/>
              <input type="text" className="loginInput" placeholder={t('enterEmail')}/>
          </div>

          <div className="loginBottom">
              <div className="">
                  <input className="loginBtn" type="submit" value={t('login')} />
              </div>
              <div className="newUser">
                  {t('backToPage')}<Link to={'/login'}>{t('login')} </Link>
                  / <Link to={'/register'}>{t('register')} </Link>
              </div>
          </div>

      </div>
    </div>
  </>
  )
}
