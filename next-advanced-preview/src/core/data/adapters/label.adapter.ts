import { LabelData } from "@/core/domain/Label";
import { GridItem } from "@/core/types";

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

  const careInstructionsContent = [
    data.instrucoes_de_lavagem.lavagem,
    data.instrucoes_de_lavagem.alvejante,
    data.instrucoes_de_lavagem.limpeza_a_seco,
    data.instrucoes_de_lavagem.passar,
    data.instrucoes_de_lavagem.secagem.join(" "),
  ].join("/");

  items.push({
    i: "care-instructions",
    x: 0,
    y: yPosition,
    w: 1,
    minW: 1,
    maxW: 1,
    h: 3,
    content: careInstructionsContent,
  });
  yPosition += 3;

  return items;
}
