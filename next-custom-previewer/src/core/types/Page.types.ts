export type Page = {
  id: number;
  name: string;
  labelId: number;
  dimensions: {
    width: number;
    height: number;
    minW?: number;
    maxW?: number;
  };
  cols: {
    amount: number;
  };
};
