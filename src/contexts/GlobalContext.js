import React, { createContext, useState } from "react";

export const GlobalContext = createContext();

export const GlobalProvider = ({children}) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <GlobalContext.Provider value={{isOpen, setIsOpen}}>
      {children}
    </GlobalContext.Provider>
  );
};
