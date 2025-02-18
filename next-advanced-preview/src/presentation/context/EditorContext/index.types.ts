import { ReactNode } from "react";

export type IEditorMode = "basic" | "advanced";

export interface EditorContextProps {
  mode: IEditorMode;
  onChangeMode: (value: IEditorMode) => void;
}

export interface EditorProviderProps {
  initialMode: IEditorMode;
  children: ReactNode;
}
