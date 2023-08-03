import { createContext, useContext, useState } from "react";
import { Label } from "../types/Label.types";
import { labels } from "../mock/label.mock";
import { LabelContainerSchema } from "../types/_common/LabelContainerSchema.types";
import { ContentGroup } from "../types/_common/ContentGroup.types";

interface LabelContextProps {
  children: React.ReactNode;
}

interface LabelContextProviderProps {
  container: LabelContainerSchema;
  setContainer: (container: LabelContainerSchema) => void;

  contentGroup: ContentGroup;
  setContentGroup: (layout: ContentGroup) => void;

  dispatchWindowResizeEvent: () => void;
}

const LabelContext = createContext({} as LabelContextProviderProps);

export const LabelProvider = ({ children }: LabelContextProps) => {
  const [label, setLabel] = useState<Label>(labels[0]);
  const [container, setContainer] = useState<LabelContainerSchema>(
    label.layoutSchema.container
  );
  const [contentGroup, setContentGroup] = useState<ContentGroup>(
    label.layoutSchema.contentGroup
  );


  function validateDimensions(value: LabelContainerSchema): boolean {
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

  function handleUpdateContainer(value: LabelContainerSchema) {
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
    <LabelContext.Provider
      value={{
        container: container,
        setContainer: handleUpdateContainer,
        contentGroup: contentGroup,
        setContentGroup: setContentGroup,
        dispatchWindowResizeEvent,
      }}
    >
      {children}
    </LabelContext.Provider>
  );
};

export const useLabelContext = () => useContext(LabelContext);
