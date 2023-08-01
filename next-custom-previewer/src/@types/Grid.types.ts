export interface GridItemProps {
    // A string corresponding to the component key
    i: string;
  
    // These are all in grid units, not pixels
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
  }