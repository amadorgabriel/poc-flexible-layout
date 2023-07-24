import { initialContainerBlock } from "@/utils/constants";
import { ContainerBlock } from "@/@types/Block.types";
import { createContext, useContext, useState } from "react";

interface BlockContextProps {
  children: React.ReactNode;
}

interface BlockContextProviderProps {
  containerBlock: ContainerBlock;
  setBlockContainer: (blockContainer: ContainerBlock) => void;
}

const BlockContext = createContext({} as BlockContextProviderProps);

export const BlockContextProvider = ({ children }: BlockContextProps) => {
  const [blockContainer, setBlockContainer] = useState<ContainerBlock>(
    initialContainerBlock
  );

  return (
    <BlockContext.Provider
      value={{
        containerBlock: blockContainer,
        setBlockContainer: setBlockContainer,
      }}
    >
      {children}
    </BlockContext.Provider>
  );
};

export const useBlockContext = () => useContext(BlockContext);
