export type Position = {
  x: number;
  y: number;
};

export type Size = {
  width: number;
  height: number;
};

export type ContainerBlock = {
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
    readonly minCols: number;
  };
  isBlocked?: boolean;
};
