import { Container } from "@/@types/Block.types";
import { GridItemProps } from "@/@types/Grid.types";

export const initialContainer: Container = {
  name: "Container Principal",
  dimensions: {
    width: 300,
    height: 250,
    minWidth: 100,
    maxWidth: 600,
    minHeight: 200,
    maxHeight: 500,
  },
  position: {
    x: 150,
    y: 20,
  },
  cols: {
    amount: 2,
    minCols: 1,
    colGap: 10,
    rowGap: 10,
  },
  isBlocked: true,
};

export const initialGridLayout: GridItemProps[] = [
  {
    i: "a",
    x: 0,
    y: 0,
    w: 1,
    h: 3,
    minW: 1,
    minH: 1,
    hidden: false,
    content: {
      text: "Test",
      imageUrl: null,
    },
  },
  {
    i: "b",
    x: 1,
    y: 0,
    w: 3,
    h: 2,
    minW: 1,
    minH: 1,
    hidden: false,
    content: {
      text: null,
      imageUrl:
        "data:image/png;base64,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",
    },
  },
  {
    i: "c",
    x: 4,
    y: 4,
    w: 1,
    h: 1,
    minW: 1,
    minH: 1,
    hidden: false,
    // static: true,
    content: {
      text: "Test",
      imageUrl: null,
    },
  },
];
