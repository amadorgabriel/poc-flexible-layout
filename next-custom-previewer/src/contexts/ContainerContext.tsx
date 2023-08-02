import { createContext, useContext, useState } from "react";

import { GridItemProps } from "@/@types/Grid.types";
import { Container } from "@/@types/Block.types";
import { initialContainer, initialGridLayout } from "@/utils/constants";

interface ContainerContextProps {
  children: React.ReactNode;
}

interface ContainerContextProviderProps {
  gridLayout: GridItemProps[];
  container: Container;
  setGridLayout: (layout: GridItemProps[]) => void;
  setContainer: (container: Container) => void;
  dispatchWindowResizeEvent: () => void;
}

const ContainerContext = createContext({} as ContainerContextProviderProps);

export const ContainerProvider = ({ children }: ContainerContextProps) => {
  const [container, setContainer] = useState<Container>({
    ...initialContainer,
  });

  const [gridLayout, setGridLayout] =
    useState<GridItemProps[]>(initialGridLayout);

  function validateDimensions(value: Container): boolean {
    let validated = true;

    // Changed width
    if (container.dimensions.width !== value.dimensions.width) {
      if (
        !(value.dimensions.width >= value.dimensions.minWidth) ||
        !(value.dimensions.width <= value.dimensions.maxWidth)
      ) {
        validated = false;
      }

      return validated;
    }

    // Changed height
    if (container.dimensions.height !== value.dimensions.height) {
      if (
        !(value.dimensions.height >= initialContainer.dimensions.minHeight) ||
        !(value.dimensions.height <= initialContainer.dimensions.maxHeight)
      ) {
        validated = false;
      }
    }

    return validated;
  }

  function handleUpdateContainer(value: Container) {
    // validity dimentions constaints
    const validated = validateDimensions(value);

    if (!validated) return;

    setContainer(value);
  }

  // Update grid layout
  function dispatchWindowResizeEvent() {
    window.dispatchEvent(new Event("resize"));
  }

  return (
    <ContainerContext.Provider
      value={{
        container: container,
        setContainer: handleUpdateContainer,
        gridLayout: gridLayout,
        setGridLayout: setGridLayout,
        dispatchWindowResizeEvent,
      }}
    >
      {children}
    </ContainerContext.Provider>
  );
};

export const useContainerContext = () => useContext(ContainerContext);
