import { Label } from "../types/Label.types";
import { companies } from "./companies.mock";
import { contentGroups } from "./_common/contentGroups.mock";
import { ConservationSymbols } from "@/components/ConservationSymbol";
import { containers } from "./_common/containers.mock";
import { layouts } from "./_common/layouts.mock";

export const labels: Label[] = [
  {
    id: 0,
    name: "Label Etiqueta Certa",
    size: "P",
    color: "Azul",
    company: companies[0],
    compositions: ["96% Poliéster", "4% Elastano", "100% Algodão"],
    conservationSymbols: [
      ConservationSymbols.Wash30,
      ConservationSymbols.NoBleach,
      ConservationSymbols.NoTumbleDry,
      ConservationSymbols.InShadeDry,
      ConservationSymbols.LowIron,
    ],
    diagramationRules: {
      layout: layouts[0],
      container: containers[0],
      contentGroups: contentGroups[0],
    },
  },
];

