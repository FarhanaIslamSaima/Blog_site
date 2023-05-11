import React, { useState } from 'react';
import { createContext,useContext } from 'react';

export const LoginCheck=createContext(null);


const LoginContext = ({children}) => {
    const [login,setLogin]=useState();
    console.log(login)
   
  
    const [refresh,setRefresh]=useState(false);
   // console.log(login)
    return (
       <LoginCheck.Provider value={{
        login,
        setLogin,
        refresh,
        setRefresh
       }}>
        {children}

       </LoginCheck.Provider>
    );
};

export default LoginContext;