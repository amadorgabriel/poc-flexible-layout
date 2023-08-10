import { StaticImageData } from "next/image";

type Prefix = "Importado Por:" | "Fabricado Por:";
type NifPrefix = "CUIT" | "RUC" | "CNPJ";
type ContryNamePrefix = "Feito no:" | "Feito na:";

export type Company = {
  name: string;
  prefix: Prefix;
  nif: string;
  nifPrefix: NifPrefix;
  logoImage: StaticImageData;
  contryName: string;
  contryNamePrefix: ContryNamePrefix;
};
