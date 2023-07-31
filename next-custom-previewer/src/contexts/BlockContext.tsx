import { initialContainerBlock } from "@/utils/constants";
import { ContainerBlock } from "@/@types/Block.types";
import { createContext, useContext, useState } from "react";

interface BlockContextProps {
  children: React.ReactNode;
}

interface BlockContextProviderProps {
  containerBlock: ContainerBlock;
  setBlockContainer: (blockContainer: ContainerBlock) => void;
  dispatchWindowResizeEvent: () => void;
}

const BlockContext = createContext({} as BlockContextProviderProps);

export const BlockContextProvider = ({ children }: BlockContextProps) => {
  const [blockContainer, setBlockContainer] = useState<ContainerBlock>({
    ...initialContainerBlock,
  });

  function validateDimentions(value: ContainerBlock): boolean {
    let validated = false;

    // Changed width
    if (blockContainer.dimensions.width !== value.dimensions.width) {
      if (
        value.dimensions.width >= value.dimensions.minWidth &&
        value.dimensions.width <= value.dimensions.maxWidth
      ) {
        validated = true;
      }

      return validated;
    }

    // Changed height
    if (blockContainer.dimensions.height !== value.dimensions.height) {
      if (
        value.dimensions.height >= initialContainerBlock.dimensions.minHeight &&
        value.dimensions.height <= initialContainerBlock.dimensions.maxHeight
      ) {
        validated = true;
      }
    }

    return validated;
  }

  function handleUpdateContainer(value: ContainerBlock) {
    // validity dimentions constaints
    const validated = validateDimentions(value);

    if (!validated) return;

    console.log(value);
    console.log(blockContainer);
    console.log(validated);

    setBlockContainer(value);
  }

  // Update grid layout
  function dispatchWindowResizeEvent() {
    window.dispatchEvent(new Event("resize"));
  }

  return (
    <BlockContext.Provider
      value={{
        containerBlock: blockContainer,
        setBlockContainer: handleUpdateContainer,
        dispatchWindowResizeEvent,
      }}
    >
      {children}
    </BlockContext.Provider>
  );
};

export const useBlockContext = () => useContext(BlockContext);
