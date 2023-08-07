import { Company } from "../types/Company.types";

import logoEtiquetaCerta from "@/assets/img/label0/logo.png";

export const companies: Record<number, Company> = {
  0: {
    id: 0,
    name: "Etiqueta Certa Treinamentos e Sistemas LTDA",
    prefix: "Fabricado Por:",
    nif: "22.949.494/0001-98",
    nifPrefix: "CNPJ",
    logoImage: logoEtiquetaCerta,
    contryName: "Brasil",
    contryNamePrefix: "Feito no:",
  },
  // 1: {
  //   id: 1,
  //   name: "Wabro",
  //   prefix: "Importado Por:",
  //   nif: "30-70801382-6",
  //   nifPrefix: "CUIT",
  //   logoImage:
  //     "https://www.tiendawabro.com.ar/arquivos/wabro_logo.png?v=637307917730600000",
  //   contryName: "Argentina",
  //   contryNamePrefix: "Feito na:",
  // },
};
