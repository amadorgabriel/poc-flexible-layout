import { createContext, useContext, useState } from "react";
import { CommomBlock, ContainerBlock } from "@/@types/Block";

interface BlockContextProps {
  children: React.ReactNode;
}

interface BlockContextProviderProps {
  containerBlock: ContainerBlock;
  initialContainerBlock: ContainerBlock;
  setBlockContainer: (blockContainer: ContainerBlock) => void;

  commomBlocks?: CommomBlock[];
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
        initialContainerBlock: initialContainerBlock,
        setBlockContainer: setBlockContainer,
      }}
    >
      {children}
    </BlockContext.Provider>
  );
};

export const useBlockContext = () => useContext(BlockContext);

const initialContainerBlock = {
  // width: 400,
  // height: 400,
  name: "Bloco Principal",
  initialPosition: {
    x: 450,
    y: 200,
  },
  initialSize: {
    width: 150,
    height: 150,
  },
  isBlocked: false,
};
