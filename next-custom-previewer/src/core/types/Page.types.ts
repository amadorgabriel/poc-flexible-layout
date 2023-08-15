export type Page = {
  id: number;
  name: string;
  labelId: number;
  dimensions: {
    width: number;
    height: number;
  };
  cols: {
    amount: number;
  };
};
