import UserContext from "./UserContext";
import { useState, useEffect } from "react";
import { getApi } from "./../services/Api/api";
import Cookies from "js-cookie";
import { useNavigate} from 'react-router-dom'

const UserInfo = ({ children }) => {
  const navigate = useNavigate();
  const [isLoggdIn, setIsLoggeIn] = useState(false);
  const [token, setToken] = useState(false);
  const [userData, setUserData] = useState({});

  const getUserData = async () => {
    const path = "users/me";
    try {
      const data = await getApi(path);
      // console.log(data)
      setUserData(data.data.data);
      setIsLoggeIn(true)
    } catch (error) {
      console.log(error);
    }
  };

  const logout = () => {
    // Clear the cookies
    Cookies.remove("accessToken");
    Cookies.remove("refreshToken");

    // Reset state
    setUserData(null);
    navigate('/login')
    setIsLoggeIn(false);
  };

  useEffect(() => {
    if(Cookies.get("accessToken")){
      getUserData();
    }
  },[]);
  
  console.log(Cookies.get("accessToken"));
  return (
    <UserContext.Provider
      value={{
        isLoggdIn,
        token,
        userData,
        logout,
        getUserData,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
export default UserInfo;
