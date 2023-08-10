import { Layout } from "react-grid-layout";
import { Label } from "../types/Label.types";
import { labels } from "../mock/labels.mock";
import { Container } from "../types/_common/Container.types";
import { createContext, useContext, useState } from "react";
import { ContentGroup } from "../types/_common/ContentGroup.types";

interface LabelContextProps {
  children: React.ReactNode;
}

interface LabelContextProviderProps {
  container: Container;
  setContainer: (container: Container) => void;

  contentGroups: ContentGroup[];
  setContentGroups: (contentGroups: ContentGroup[]) => void;

  layout: Layout[];
  setLayout: (layout: Layout[]) => void;
}

const LabelContext = createContext({} as LabelContextProviderProps);

export const LabelProvider = ({ children }: LabelContextProps) => {
  const [currLabel, setCurrLabel] = useState<Label>(labels[0]);

  const [container, setContainer] = useState<Container>(
    currLabel.diagramationRules.container
  );

  const [contentGroups, setContentGroups] = useState<ContentGroup[]>(
    currLabel.diagramationRules.contentGroups
  );

  const [layout, setLayout] = useState<Layout[]>(
    currLabel.diagramationRules.layout
  );

  function validateContainerDimensions(value: Container): boolean {
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
        !(value.dimensions.height >= container.dimensions.minHeight) ||
        !(value.dimensions.height <= container.dimensions.maxHeight)
      ) {
        validated = false;
      }
    }

    return validated;
  }

  function handleUpdateContainer(value: Container) {
    const valid = validateContainerDimensions(value);

    if (!valid) return;

    setContainer({ ...value });
  }

  function handleUpdateContentGroups(value: ContentGroup[]) {
    setContentGroups(value);
  }

  function handleUpdateLayout(value: Layout[]) {
    setLayout(value)
  }

  return (
    <LabelContext.Provider
      value={{
        container,
        setContainer: handleUpdateContainer,

        contentGroups,
        setContentGroups: handleUpdateContentGroups,

        layout,
        setLayout: handleUpdateLayout,
      }}
    >
      {children}
    </LabelContext.Provider>
  );
};

export const useLabelContext = () => useContext(LabelContext);
