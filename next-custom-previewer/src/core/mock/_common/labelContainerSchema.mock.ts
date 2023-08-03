import { LabelContainerSchema } from "@/core/types/_common/LabelContainerSchema.types";

export const labelContainerSchemas: Record<number, LabelContainerSchema> = {
  0: {
    id: 0,
    name: "Container Modelo",
    dimensions: {
      width: 300,
      height: 250,
      minWidth: 100,
      maxWidth: 600,
      minHeight: 100,
      maxHeight: 10000,
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
  },
};
