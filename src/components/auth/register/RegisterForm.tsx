import { FaKey } from "react-icons/fa6";
import { FaUserPlus } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";
import { MdOutlineNumbers } from "react-icons/md";



export default function RegisterFrom() {
  return (
    <>
    <div className="loginFrom">
      <div className="loginContainer">
          <div className="loginTitle">
              <div className="loginLogin">ثبت نام <span><FaUserPlus className="loginIcon"/></span></div>
              <span className="loginWelcome">به آریا شاپ خوش آمدید</span>
          </div>

          <div className="inputLable">نام</div>
          <div className="inputItem">
              <FaUser className="intpuIcon"/>
              <input type="text" className="loginInput" placeholder="  نام خود را وارد نمایید..."/>
          </div>

          <div className="inputLable">  موبایل</div>
          <div className="inputItem">
              <MdOutlineNumbers className="intpuIcon"/>
              <input type="text" className="loginInput" placeholder="  نمبر موبایل خود را وارد نمایید..."/>
          </div>

          <div className="inputLable">ایمیل  </div>
          <div className="inputItem">
              <MdEmail className="intpuIcon"/>
              <input type="text" className="loginInput" placeholder="  ایمیل خود را وارد نمایید..."/>
          </div>

          <div className="inputLable">رمزعبور</div>
          <div className="inputItem">
              <FaKey className="intpuIcon"/>
              <input type="text" className="loginInput" placeholder="رمزعبور خود را وارد نمایید..."/>
          </div>

          <div className="loginBottom">
              <div className="">
                  <input className="loginBtn" type="submit" value="ورود" />
              </div>
              <div className="newUser">
                    قبلا ثبت نام کرده اید؟  <Link to={'/login'}>وارد شدن </Link>
              </div>
          </div>

      </div>
    </div>
  </>
  )
}
