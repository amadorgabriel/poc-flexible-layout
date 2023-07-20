import { initialContainerBlock } from "@/utils/constants";
import { CommomBlock, ContainerBlock } from "@/@types/Block.types";
import { createContext, useContext, useState } from "react";

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
