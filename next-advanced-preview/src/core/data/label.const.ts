import { LabelData } from "../domain/Label";

export const labelData: LabelData = {
  empresa: {
    nome: "Etiqueta Certa",
    cnpj: "22.949.494/0001-98",
    origem: {
      portugues: "Feito no Brasil",
      ingles: "Made in Brazil",
      espanhol: "Hecho en Brasil",
      frances: "Fabriqué en Brésil",
    },
  },
  codigo: "34/0",
  composicao: {
    tecido: {
      portugues: "100% Algodão",
      ingles: "100% Cotton",
      espanhol: "100% Algodón",
      frances: "100% Coton",
    },
    forro: {
      portugues: "100% Poliéster",
      ingles: "100% Polyester",
      espanhol: "100% Poliéster",
      frances: "100% Polyester",
    },
  },
  instrucoes_de_lavagem: {
    lavagem: "Machine wash, warm, 40 °C (105 °F), normal cycle",
    alvejante: "Do not bleach",
    secagem: ["Tumble dry, low", "Line dry in the shade"],
    passar: "Iron, low",
    limpeza_a_seco: "Do not dryclean",
  },
};
