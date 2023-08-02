export type Position = {
  x: number;
  y: number;
};

export type Size = {
  width: number;
  height: number;
};

export type Container = {
  name: string;
  position: Position;
  dimensions: {
    width: number;
    height: number;
    readonly minWidth: number;
    readonly maxWidth: number;
    readonly minHeight: number;
    readonly maxHeight: number;
  };
  cols: {
    amount: number;
    rowGap: number; // px
    colGap: number; // px
    minCols: number;
  };
  isBlocked?: boolean;
};
