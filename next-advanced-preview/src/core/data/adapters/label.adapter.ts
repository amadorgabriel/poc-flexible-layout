import { GridItem, LabelData } from "@/core/types";

export function createGridItemsFromData(data: LabelData): GridItem[] {
  const items: GridItem[] = [];
  let yPosition = 0;

  // Company info
  items.push({
    i: "company-name",
    x: 0,
    y: yPosition,
    w: 1,
    minW: 1,
    maxW: 1,
    h: 1,
    content: data.empresa.nome,
  });
  yPosition++;

  items.push({
    i: "company-cnpj",
    x: 0,
    y: yPosition,
    w: 1,
    minW: 1,
    maxW: 1,
    h: 1,
    content: data.empresa.cnpj,
  });
  yPosition++;

  // Origin with translations
  const originContent = [
    data.empresa.origem.portugues,
    data.empresa.origem.ingles,
    data.empresa.origem.espanhol,
    data.empresa.origem.frances,
  ].join(" / ");
  items.push({
    i: "origin",
    x: 0,
    y: yPosition,
    w: 1,
    minW: 1,
    maxW: 1,
    h: 2,
    content: originContent,
  });
  yPosition += 2;

  // Code
  items.push({
    i: "code",
    x: 0,
    y: yPosition,
    w: 1,
    minW: 1,
    maxW: 1,
    h: 1,
    content: `Código: ${data.codigo}`,
  });
  yPosition++;

  // Composition
  const fabricContent = [
    data.composicao.tecido.portugues,
    data.composicao.tecido.ingles,
    data.composicao.tecido.espanhol,
    data.composicao.tecido.frances,
  ].join(" / ");
  items.push({
    i: "fabric",
    x: 0,
    y: yPosition,
    w: 1,
    minW: 1,
    maxW: 1,
    h: 2,
    content: `Tecido: ${fabricContent}`,
  });
  yPosition += 2;

  const liningContent = [
    data.composicao.forro.portugues,
    data.composicao.forro.ingles,
    data.composicao.forro.espanhol,
    data.composicao.forro.frances,
  ].join(" / ");
  items.push({
    i: "lining",
    x: 0,
    y: yPosition,
    w: 1,
    minW: 1,
    maxW: 1,
    h: 2,
    content: `Forro: ${liningContent}`,
  });
  yPosition += 2;

  // Care instructions
  items.push({
    i: "wash",
    x: 0,
    y: yPosition,
    w: 1,
    minW: 1,
    maxW: 1,
    h: 1,
    content: data.instrucoes_de_lavagem.lavagem,
  });
  yPosition++;

  items.push({
    i: "bleach",
    x: 0,
    y: yPosition,
    w: 1,
    minW: 1,
    maxW: 1,
    h: 1,
    content: data.instrucoes_de_lavagem.alvejante,
  });
  yPosition++;

  data.instrucoes_de_lavagem.secagem.forEach((instruction, index) => {
    items.push({
      i: `dry-${index}`,
      x: 0,
      y: yPosition,
      w: 1,
      minW: 1,
      maxW: 1,
      h: 1,
      content: instruction,
    });
    yPosition++;
  });

  items.push({
    i: "iron",
    x: 0,
    y: yPosition,
    w: 1,
    minW: 1,
    maxW: 1,
    h: 1,
    content: data.instrucoes_de_lavagem.passar,
  });
  yPosition++;

  items.push({
    i: "dry-clean",
    x: 0,
    y: yPosition,
    w: 1,
    minW: 1,
    maxW: 1,
    h: 1,
    content: data.instrucoes_de_lavagem.limpeza_a_seco,
  });

  return items;
}
