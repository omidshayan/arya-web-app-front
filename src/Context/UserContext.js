import { createContext } from "react";


const UserContext = createContext({
    isLoggdIn: false,
    token: null,
    userDate: null,
    login: () =>{},
    logout: () =>{},
});



export default UserContext;