import './Sidebar.css';
import CloseIcon from '@mui/icons-material/Close';
import { FaHome } from "react-icons/fa";
import { MdRoundaboutRight  } from "react-icons/md";
import { IoIosContact } from "react-icons/io";
import { MdCategory } from "react-icons/md";
import { Link } from 'react-router-dom';



export default function Sidebar({showSlider, closeSlider}) {
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
                  <span className='sidebarName'>صفحه اصلی</span>
                </div>
              </Link>
              <a href="#">
                <div className="siebarItem">
                  <MdCategory className='sidebarIcon'/>
                  <span className='sidebarName'>دسته بندی ها</span>
                </div>
              </a>
              <a href="#">
                <div className="siebarItem">
                  <MdRoundaboutRight  className='sidebarIcon'/>
                  <span className='sidebarName'>درباره ما</span>
                </div>
              </a>
              <a href="#">
                <div className="siebarItem">
                  <IoIosContact className='sidebarIcon'/>
                  <span className='sidebarName'>تماس</span>
                </div>
              </a>
          </div>
          <hr className="border" />
          <div className="authSidebar">
            <Link to={'/login'} href="#">ورود / ثبت نام</Link>
          </div>
        </div>
    </>
  )
}
