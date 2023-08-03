export type LabelContainerSchema = {
  id: number
  name: string;
  position: {
    x: number;
    y: number;
  };
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
