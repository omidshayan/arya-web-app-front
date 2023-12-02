import { createContext } from "react";


export const UserInfo = createContext();

const UserInfoProvider = ({children}) => {
    return(
        <UserInfo.Provider value={{n: 'omid', f: 'jan'}}>
            {children}
        </UserInfo.Provider>
    )
}

export default UserInfoProvider;