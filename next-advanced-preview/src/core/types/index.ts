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
  settings: {
    width: number;
    height: number;
    itemSpacing: number;
    lineHeight: number;
    margin: number;
  };
  items: T[];
}
