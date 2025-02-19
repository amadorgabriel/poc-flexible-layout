import ReactGridLayout from "react-grid-layout";

export interface LabelData {
  empresa: {
    nome: string;
    cnpj: string;
    origem: {
      portugues: string;
      ingles: string;
      espanhol: string;
      frances: string;
    };
  };
  codigo: string;
  composicao: {
    tecido: {
      portugues: string;
      ingles: string;
      espanhol: string;
      frances: string;
    };
    forro: {
      portugues: string;
      ingles: string;
      espanhol: string;
      frances: string;
    };
  };
  instrucoes_de_lavagem: {
    lavagem: string;
    alvejante: string;
    secagem: string[];
    passar: string;
    limpeza_a_seco: string;
  };
}

export interface GridItem {
  i: string;
  x: number;
  y: number;
  w: number;
  h: number;
  content: string;
  minW?: number | undefined;
  maxW?: number | undefined;
  isResizable?: boolean;
  isDraggable?: boolean;
}

export interface Container {
  id: string;
  settings: {
    width: number;
    height: number;
    itemSpacing: number;
    lineHeight: number;
    margin: number;
  };
  items: GridItem[];
}
