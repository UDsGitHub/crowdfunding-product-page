import React, { createContext, useState } from "react";
import { data } from "../data/data";

export const GlobalContext = createContext();

export const GlobalProvider = ({children}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [pledgeState, setPledgeState] = useState({
    activeObject: null,
    objects: [data],
  });

  return (
    <GlobalContext.Provider value={{isOpen, setIsOpen, pledgeState, setPledgeState}}>
      {children}
    </GlobalContext.Provider>
  );
};
