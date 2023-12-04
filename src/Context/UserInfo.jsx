import UserContext from "./UserContext";
import { useState, useEffect } from "react";
import { getApi } from "./../services/Api/api";
import Cookies from "js-cookie";

const UserInfo = ({ children }) => {
  const [isLoggdIn, setIsLoggeIn] = useState(false);
  const [token, setToken] = useState(false);
  const [userData, setUserData] = useState();

  const getUserData = async () => {
    const path = "users/me";
    try {
      const data = await getApi(path);
      // console.log(data)
      setUserData(data.data.data);
      setIsLoggeIn(true)
      console.log(isLoggdIn)
    } catch (error) {
      console.log(error);
    }
  };

  //   const logout = async () => {

  //   };

  useEffect(() => {
    getUserData();
  }, [Cookies.get("accessToken")]);
  console.log(UserContext);
  return (
    <UserContext.Provider
      value={{
        isLoggdIn,
        token,
        userData,
        getUserData,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
export default UserInfo;
