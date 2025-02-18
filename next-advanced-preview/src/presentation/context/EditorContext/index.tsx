import React, { createContext, useContext, useState } from "react";
import {
  EditorContextProps,
  EditorProviderProps,
  IEditorMode,
} from "./index.types";

const EditorContext = createContext<EditorContextProps | undefined>(undefined);

export const EditorProvider: React.FC<EditorProviderProps> = ({
  initialMode,
  children,
}) => {
  const [mode, setMode] = useState<IEditorMode>(initialMode);

  const onChangeMode = (value: IEditorMode) => {
    if (value === mode) return;

    setMode(value);
  };

  return (
    <EditorContext.Provider value={{ mode, onChangeMode }}>
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
