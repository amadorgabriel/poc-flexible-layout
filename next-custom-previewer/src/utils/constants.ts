import { GridItemProps } from "@/@types/Grid.types";

export const initialContainerBlock = {
  name: "Container Principal",
  dimensions: {
    width: 500,
    height: 480,
    minWidth: 100,
    maxWidth: 600,
    minHeight: 200,
    maxHeight: 500,
  },
  position: {
    x: 250,
    y: 100,
  },
  cols: {
    amount: 1,
    minCols: 1,
  },
  isBlocked: true,
};

export const initialGridLayout: GridItemProps[] = [
  { i: "a", x: 0, y: 0, w: 1, h: 2, minW: 1, minH: 1, hidden: false },
  { i: "b", x: 1, y: 0, w: 3, h: 2, minW: 1, minH: 1, hidden: false },
  { i: "c", x: 4, y: 0, w: 1, h: 2, minW: 1, minH: 1, hidden: false },
];
