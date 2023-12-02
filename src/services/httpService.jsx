import axios from "axios";
import * as configData  from "./config.json";
// import swal from "sweetalert";
import { getCookie, setCookie } from 'typescript-cookie'
import { toast } from "react-toastify";

const {BaseUrl} = configData;
const Axios = axios.create({ baseURL: BaseUrl });


export function getJwt() {
  let jwt = getCookie("accessToken");
  console.log(jwt);
  return jwt;
}

Axios.interceptors.request.use(
  (AxiosConfig) => {
    const newConfig = { ...AxiosConfig };
    newConfig.headers.Authorization = `${getJwt()}`;
    // newConfig.headers.Authorization = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImR1dHkiOiJoYW1hbCIsInJvbGUiOiJhZG1pbiIsInN0YXR1cyI6InBlbmRpbmciLCJfX3QiOiJlbXBsb3llZSIsInN0YXJ0RGF0ZSI6IjIwMjItMTItMTRUMjE6MzQ6MjAuMjQyWiIsImVuZERhdGUiOiIyMDIyLTEyLTE0VDIxOjM0OjIwLjI0MloiLCJfaWQiOiI2MzhiY2FkM2Y0NjliZjJlZWM2YjUzOGEiLCJtb2JpbGUiOiIwNzAxMTIzNDU2NyIsIl9fdiI6MCwiYWRkcmVzcyI6ItmH2LHYp9iqINmF24zYr9in2YYg2KfYrdmF2K8iLCJjcmVhdGVkQXQiOiIyMDIyLTEyLTAzVDIyOjE2OjUxLjMzNloiLCJuYW1lIjoi2KfYrdmF2K8g2YXYsdin2K_bjCIsInVwZGF0ZWRBdCI6IjIwMjItMTItMTRUMjE6MzQ6MTMuMDk4WiJ9LCJicmFuY2hOYW1lIjoibmlrZSIsImJyYW5jaE5pa05hbWUiOiLZhtin24zaqSIsImV4cGlyZURhdGUiOiIyMDIyLTA2LTIyIiwic3RhcnRDb250cmFjdCI6IjIwMjItMDEtMjIiLCJpYXQiOjE2NzEwNTM2NjAsImV4cCI6MTY3Mjk1NDQ2MH0.COE9SEq-rhbCevMWiQH7LXQAk--qRi9pmy_QjcjM6Ic`;
    newConfig.headers["Content-Type"] = "application/json";
    return newConfig;
  },
  (error) => {
    Promise.reject(error);
  }
);

Axios.interceptors.response.use(
  function (response) {
    toast.success(response.data.message, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    return response;
  },
  function (error) {


    let message = error.response ? error.response.data?.error : "خطای سرور";
    // console.log(error.response.data);
    error.response.data.errors.map(
      (err) =>{
        toast.error(err.message, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    )

    // swal({
    //   title: "خطا",
    //   text: message,
    //   icon: "error",
    // });
    return Promise.reject(error);
  }
);
export default {
  GET: Axios.get,
  POST: Axios.post,
  PUT: Axios.put,
  PATCH: Axios.patch,
  DELETE: Axios.delete,
};
