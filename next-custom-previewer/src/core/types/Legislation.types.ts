export type Legislation = {
  id: number;
  name: string;
  country: string;
  labelRule: {
    compositionLigature: "/" | "-";
    fontSize: string;
    page: {
      minW: number;
      maxW: number;
    };
  };
};
