
export type LabelData = {
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
};

