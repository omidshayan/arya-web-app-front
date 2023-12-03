import { createContext } from "react";


const UserInfoContext = createContext({
    isLoggdIn: false,
    token: null,
    UserInfo: null,
    login: () =>{},
    logout: () =>{},
});



export default UserInfoContext;