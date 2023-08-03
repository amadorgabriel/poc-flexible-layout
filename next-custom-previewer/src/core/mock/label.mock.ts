import { Label } from "../types/Label.types";
import { companies } from "./company.mock";
import { contentGroups } from "./_common/contentGroup.mock";
import { labelContainerSchemas } from "./_common/labelContainerSchema.mock";

export const labels: Record<number, Label> = {
  0: {
    id: 0,
    name: "Etiqueta | Etiqueta Certa",
    description: "...",
    companies: [
      companies[0]
    ],
    layoutSchema: {
      container: labelContainerSchemas[0],
      contentGroup: contentGroups[0],
    },
  },
};
