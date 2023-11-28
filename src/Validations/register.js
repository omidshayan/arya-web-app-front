// import { object, string } from 'yup'
import * as Yup from "yup";

export const loginSchema = Yup.object().shape({
  emailOrMobile: Yup.string().required('لطفا ایمیل یا نمبر موبایل  خود را وارد کنید'),
  password: Yup.string().required('لطفا رمزعبور خود را وارد کنید'),
});

export const registerSchema = Yup.object().shape({
  name: Yup.string()
  .min(3, "نام حداقل باید 3 حرف باشد")
  .max(30, "نام حداکثر باید 30 حرف  باشه")
  .required("نام خود را وارد نمایید"),

  mobile: Yup.string()
  .min(10, "موبایل حداقل باید 10 عدد باشد")
  .max(11, "موبایل حداکثر باید 10 عدد  باشه")
  .required("نمبر خود را وارد نمایید"),


  email: Yup.string()
  .email("ایمیل نا معتبر است")
  .min(10, "ایمیل نا معتبر است")
  .max(50, "ایمیل نا معتبر است")
  .required("ایمیل الزامی است"),

  password: Yup.string()
    .min(6, "رمزعبور حداقل باید 6 حرف باشد")
    .max(60, "رمزعبور حداکثر باید 60 کاراکتر  باشه")
    .required("رمزعبور الزامی است"),
});

export const forgetPassSchema = Yup.object().shape({
  emailOrMobile: Yup.string().required('لطفا ایمیل خود را وارد کنید'),
});


