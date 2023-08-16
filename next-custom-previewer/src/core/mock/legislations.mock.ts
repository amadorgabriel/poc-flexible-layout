import { Legislation } from "../types/Legislation.types";

export const legislations: Legislation[] = [
  {
    id: 0,
    name: "Legislação Brasileira",
    country: "Brasil",
    labelRule: {
      compositionLigature: "/",
      fontSize: "14px",
      page: {
        minW: 20,
        maxW: 400,
      },
    },
  },
  {
    id: 1,
    name: "Legislação Mercosul",
    country: "Espanha",
    labelRule: {
      compositionLigature: "-",
      fontSize: "12px",
      page: {
        minW: 40,
        maxW: 600,
      },
    },
  },
];
