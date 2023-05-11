import React, { useState } from 'react';
import { createContext,useContext } from 'react';
export const LoginCheck=createContext(null);

const LoginContext = ({children}) => {
    const [login,setLogin]=useState(false);
    return (
       <LoginCheck.Provider value={{
        login,
        setLogin
       }}>
        {children}

       </LoginCheck.Provider>
    );
};

export default LoginContext;