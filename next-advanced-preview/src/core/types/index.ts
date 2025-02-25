import { EditorPageSettings } from "@/presentation/context/EditorContext/index.types";

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

export interface Container<T> {
  id: string;
  settings: EditorPageSettings;
  items: T[];
}
