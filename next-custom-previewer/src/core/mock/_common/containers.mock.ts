import { Container } from "@/core/types/_common/Container.types";

export const containers: Container[] = [
  {
    id: 0,
    name: "Container Modelo EC",
    dimensions: {
      width: 300,
      height: 250,
      minWidth: 100,
      maxWidth: 600, //Não funcionando
      minHeight: 100, 
      maxHeight: 10000, //Não funcionando
    },
    position: {
      x: 150,
      y: 20,
    },
    cols: {
      amount: 1,
      minCols: 1,
      colGap: 10,
      rowGap: 10,
    },
    isBlocked: true,
  },
];
