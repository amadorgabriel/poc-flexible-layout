import { Label } from "../types/Label.types";

import logoEtiquetaCerta from "@/assets/img/label0/logo.png";

export const labels: Label[] = [
  {
    id: 0,
    legislationsId: [0, 1],
    name: "Etiqueta Certa - Etiqueta",
    color: "Azul",
    company: {
      name: "Etiqueta Certa Treinamentos e Sistemas LTDA",
      logo: logoEtiquetaCerta,
    },
    compositions: ["96% Poliéster", "4% Elastano", "100% Algodão"],
    diagramation: {
      pagesId: [0, 1],
      contentGroupsId: [0, 1, 2],
    },
  },
];
