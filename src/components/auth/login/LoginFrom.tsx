import { FaKey } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";



import "./loginForm.css";
import { Link } from "react-router-dom";

export default function LoginFrom() {
  return (
    <>
      <div className="loginFrom">
        <div className="loginContainer">
          
            <div className="loginTitle">
                <div className="loginLogin">ورود <span><FaKey className="loginIcon"/></span></div>
                <span className="loginWelcome">به آریا شاپ خوش آمدید</span>
            </div>

            <div className="inputLable">ایمیل یا موبایل</div>
            <div className="inputItem">
                <MdEmail className="intpuIcon"/>
                <input type="text" className="loginInput" placeholder="ایمیل یا موبایل..."/>
            </div>

            <div className="inputLable">رمزعبور</div>
            <div className="inputItem">
                <FaKey className="intpuIcon"/>
                <input type="text" className="loginInput" placeholder="رمزعبور..."/>
            </div>

            <div className="loginBottom">
                <a href=""><div className="forgetText">رمزعبور خود را فراموش کرده اید؟</div></a>
                <div className="">
                    <input className="loginBtn" type="submit" value="ورود" />
                </div>
                <div className="newUser">
                    کاربر جدید هستید؟ <Link to={'/register'}>ثبت نام</Link>
                </div>
            </div>

        </div>
      </div>
    </>
  );
}
