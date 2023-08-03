import ReactGridLayout from "react-grid-layout";

export type ContentGroup = {
  id: number
  groups: ContentGroupItem[]
}

export interface ContentGroupItem extends ReactGridLayout.Layout {
  // Component key
  i: string;

  // In grid units, not pixels
  x: number;
  y: number;
  w: number;
  h: number;
  minW?: number;
  maxW?: number;
  minH?: number;
  maxH?: number;
  hidden?: boolean;

  static?: boolean;
  isBounded?: boolean;
  isDraggable?: boolean;
  isResizable?: boolean;
  resizeHandles?: Array<"s" | "w" | "e" | "n" | "sw" | "nw" | "se" | "ne">;

  content: {
    text: string | null;
    imageUrl: string | null;
  };
}
