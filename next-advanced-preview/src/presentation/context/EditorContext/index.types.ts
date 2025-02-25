import { ReactNode, RefObject } from "react";
import { UseReactToPrintOptions } from "react-to-print";

export type IEditorMode = "basic" | "advanced";

export interface EditorContextProps {
  //zooming
  zoom: number;
  onZoomIn: () => void;
  onZoonOut: () => void;

  //printing
  printRef: RefObject<HTMLDivElement | null>;
  printOptions: UseReactToPrintOptions;
  onChangePrintOptions: (value: UseReactToPrintOptions) => void;
  onPrint: () => void;

  //viewmode
  editionMode: IEditorMode;
  pageSettings: EditorPageSettings;
  onChangeEditionMode: (value: IEditorMode) => void;
  onChangePageSetting: (field: keyof EditorPageSettings, value: number) => void;
}

export interface EditorProviderProps {
  initialZoom: number;
  initialMode: IEditorMode;
  children: ReactNode;
}

export interface EditorPageSettings {
  width: number;
  height: number;
  itemSpacing: number;
  fontSize: number;
  lineHeight: number;
  margin: number; //padding
}
