import React, { createContext, useContext, useState } from "react";

import { labelData } from "@/core/data/label.const";
import { createGridItemsFromData } from "@/core/data/adapters/label.adapter";

import {
  EditorContextProps,
  EditorPageSettings,
  EditorProviderProps,
  GridItem,
  IEditorMode,
  PageItem,
} from "./index.types";

const EditorContext = createContext<EditorContextProps | undefined>(undefined);

export const EditorProvider: React.FC<EditorProviderProps> = ({
  initialMode,
  children,
}) => {
  const [zoom, setZoom] = useState(100);
  const [editionMode, setEditionMode] = useState<IEditorMode>(initialMode);
  const [pageSettings, setPageSettings] = useState<EditorPageSettings>({
    width: 33, //mm
    height: 54, //mm
    itemSpacing: 1, //mm
    margin: 1, //mm
    fontSize: 2, //mm
    lineHeight: 2, //mm
  });

  const [pages, setPages] = useState<PageItem<GridItem>[]>([
    {
      id: "1",
      settings: pageSettings,
      items: createGridItemsFromData(labelData),
    },
  ]);

  const onChangeEditionMode = (mode: IEditorMode) => {
    if (mode === editionMode) return;

    setEditionMode(mode);
  };

  const handleZoomIn = () => {
    setZoom((prev) => Math.min(prev + 10, 200));
  };

  const handleZoomOut = () => {
    setZoom((prev) => Math.max(prev - 10, 50));
  };

  const handlePageSettingsChange = (
    field: keyof EditorPageSettings,
    value: number
  ) => {
    if (isNaN(value)) return;

    setPageSettings({
      ...pageSettings,
      [field]: value,
    });
  };

  return (
    <EditorContext.Provider
      value={{
        zoom,
        pageSettings,
        pages,
        onChangePages: setPages,
        editionMode,
        onChangeEditionMode,
        onZoomIn: handleZoomIn,
        onZoonOut: handleZoomOut,
        onChangePageSetting: handlePageSettingsChange,
      }}
    >
      {children}
    </EditorContext.Provider>
  );
};

export const useEditor = () => {
  const context = useContext(EditorContext);
  if (!context) {
    throw new Error("useEditor must be used within an EditorProvider");
  }
  return context;
};
