import './Sidebar.css';
import CloseIcon from '@mui/icons-material/Close';
import { FaHome } from "react-icons/fa";
import { MdRoundaboutRight  } from "react-icons/md";
import { IoIosContact } from "react-icons/io";
import { MdCategory } from "react-icons/md";
import { Link } from 'react-router-dom';
import Lang from './changeLang/Lang';

import './../../i18n';
import { useTranslation } from 'react-i18next';


export default function Sidebar({showSlider, closeSlider}) {
  const {t} = useTranslation();

  return (
    <>
    <div className={`overlay ${showSlider ? 'overlayActive' : ''}`} onClick={() => closeSlider(false)}></div>

        <div className={`sidebar ${showSlider ? 'sidebarActive' : ''}`}>
            <div className="topSidebar">
                <div className="logoSidebar"><img src="img/logo.png" alt="" /></div>
                <div className="closeSidebar" onClick={() => closeSlider(false)}><CloseIcon /></div>
            </div>
        <hr className='border'/>
          <div className="sidebarItems">
              <Link to={'/'}>
                <div className="siebarItem">
                  <FaHome className='sidebarIcon'/>
                  <span className='sidebarName'>{t('homePage')}</span>
                </div>
              </Link>
              <a href="#">
                <div className="siebarItem">
                  <MdCategory className='sidebarIcon'/>
                  <span className='sidebarName'>{t('category')}</span>
                </div>
              </a>
              <a href="#">
                <div className="siebarItem">
                  <MdRoundaboutRight  className='sidebarIcon'/>
                  <span className='sidebarName'>{t('about')} </span>
                </div>
              </a>
              <a href="#">
                <div className="siebarItem">
                  <IoIosContact className='sidebarIcon'/>
                  <span className='sidebarName'>{t('contact')}</span>
                </div>
              </a>
          </div>

          <hr className="border" />
          <Lang />


          <hr className="border" />
          <div className="authSidebar">
            <Link to={'/login'} href="#"> {t('loginRegister')} </Link>
          </div>
        </div>
    </>
  )
}
