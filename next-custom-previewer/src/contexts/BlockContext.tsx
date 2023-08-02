import { initialContainerBlock, initialGridLayout } from "@/utils/constants";
import { ContainerBlock } from "@/@types/Block.types";
import { createContext, useContext, useState } from "react";
import { GridItemProps } from "@/@types/Grid.types";

interface BlockContextProps {
  children: React.ReactNode;
}

interface BlockContextProviderProps {
  gridLayout: GridItemProps[];
  containerBlock: ContainerBlock;
  setGridLayout: (layout: GridItemProps[]) => void;
  setBlockContainer: (container: ContainerBlock) => void;
  dispatchWindowResizeEvent: () => void;
}

const BlockContext = createContext({} as BlockContextProviderProps);

export const BlockContextProvider = ({ children }: BlockContextProps) => {
  const [blockContainer, setBlockContainer] = useState<ContainerBlock>({
    ...initialContainerBlock,
  });

  const [gridLayout, setGridLayout] =
    useState<GridItemProps[]>(initialGridLayout);

  function validateDimensions(value: ContainerBlock): boolean {
    let validated = true;

    // Changed width
    if (blockContainer.dimensions.width !== value.dimensions.width) {
      if (
        !(value.dimensions.width >= value.dimensions.minWidth) ||
        !(value.dimensions.width <= value.dimensions.maxWidth)
      ) {
        validated = false;
      }

      return validated;
    }

    // Changed height
    if (blockContainer.dimensions.height !== value.dimensions.height) {
      if (
        !(value.dimensions.height >= initialContainerBlock.dimensions.minHeight) ||
        !(value.dimensions.height <= initialContainerBlock.dimensions.maxHeight)
      ) {
        validated = false;
      }
    }

    return validated;
  }

  function handleUpdateContainer(value: ContainerBlock) {
    // validity dimentions constaints
    const validated = validateDimensions(value);

    if (!validated) return;

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
        gridLayout: gridLayout,
        setGridLayout: setGridLayout,
        dispatchWindowResizeEvent,
      }}
    >
      {children}
    </BlockContext.Provider>
  );
};

export const useBlockContext = () => useContext(BlockContext);
