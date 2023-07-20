import { createContext, useContext, useState } from "react";

interface BlockContextProps {
  children: React.ReactNode;
}

interface BlockContextProviderProps {}

const BlockContext = createContext({} as BlockContextProviderProps);

export const BlockContextProvider = ({ children }: BlockContextProps) => {
  return (
    <BlockContext.Provider value={{} as any}>{children}</BlockContext.Provider>
  );
};

export const useBlockContext = () => useContext(BlockContext);
