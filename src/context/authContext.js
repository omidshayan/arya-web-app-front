import { createContext } from "vm";

const AuthContext = createContext({
    isLoggedIn : false,
    token: null,
    userInfo: null,
    login: () => {},
    logout: () =>{},
});



export default AuthContext;