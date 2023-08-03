type Prefix = "Importado Por:" | "Fabricado Por:";
type NifPrefix = "CUIT" | "RUC" | "CNPJ";
type ContryNamePrefix = "Feito no:" | "Feito na:";

export type Company = {
  id: number;

  prefix: Prefix;
  name: string;
  nif: string;
  nifPrefix: NifPrefix;
  logoUrl: string;
  contryName: string;
  contryNamePrefix: ContryNamePrefix;
}