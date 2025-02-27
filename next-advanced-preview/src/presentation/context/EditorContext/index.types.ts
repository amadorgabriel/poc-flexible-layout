import { ReactNode, RefObject } from "react";

export type IEditorMode = "basic" | "advanced";

export type IPrintSettings = {
  columnAmount: number;
};

export interface EditorContextProps {
  //zooming
  zoom: number;
  onZoomIn: () => void;
  onZoonOut: () => void;

  //printing
  printRef: RefObject<HTMLDivElement | null>;
  printSettings: IPrintSettings;
  onChangePrintSettings: (value: IPrintSettings) => void;
  onPrint: () => void;

  //viewmode
  editionMode: IEditorMode;
  onChangeEditionMode: (value: IEditorMode) => void;

  //page layout
  pages: PageItem<GridItem>[];
  pageSettings: EditorPageSettings;
  onChangePages: (pages: PageItem<GridItem>[]) => void;
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

export interface GridItem {
  i: string;
  x: number;
  y: number;
  w: number;
  h: number;
  content: string;
  minW?: number | undefined;
  maxW?: number | undefined;
  isResizable?: boolean;
  isDraggable?: boolean;
}

export interface PageItem<T> {
  id: string;
  settings: EditorPageSettings;
  items: T[];
}
