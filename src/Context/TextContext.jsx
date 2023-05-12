import { createContext, useState } from "react";
import React from 'react';
export const TextProvider=createContext(null)
const TextContext = ({children}) => {
    const [text,setText]=useState();
    return (
      <TextProvider.Provider value={{
        text,
        setText
      }}>
        {children}

      </TextProvider.Provider>
    );
};

export default TextContext;