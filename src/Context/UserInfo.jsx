import UserInfoContext from "./UserInfoContext";
import { useState, useEffect } from "react";
import { getApi } from "./../services/Api/api";
import Cookies from "js-cookie";


const UserInfo = ({children}) =>{

    const [userData, setUserData] = useState();
    const getUserData = async () => {
        const path = 'users/me'
        try {
            const data = await getApi(path)
            console.log(data)
            setUserData(data.data.data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getUserData()
    }, [Cookies.get('accessToken')])

    return(

        <UserInfoContext.Provider value={{
            userData,
            getUserData    
        }}>

        {children}

        </UserInfoContext.Provider>
    )
}
export default UserInfo;