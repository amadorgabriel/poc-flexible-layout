import { LabelData } from "@/core/domain/Label";

export function createItemsFromLabelData(data: LabelData) {
  const items: Array<{ id: string; content: string }> = [];
  let itemId = 1;

  // Company info
  items.push({ id: `item-${itemId++}`, content: data.empresa.nome });
  items.push({ id: `item-${itemId++}`, content: data.empresa.cnpj });

  // Origin with translations
  const originContent = [
    data.empresa.origem.portugues,
    data.empresa.origem.ingles,
    data.empresa.origem.espanhol,
    data.empresa.origem.frances,
  ].join(" / ");
  items.push({ id: `item-${itemId++}`, content: originContent });

  // Code
  items.push({ id: `item-${itemId++}`, content: `Código: ${data.codigo}` });

  // Composition
  const fabricContent = [
    data.composicao.tecido.portugues,
    data.composicao.tecido.ingles,
    data.composicao.tecido.espanhol,
    data.composicao.tecido.frances,
  ].join(" / ");
  items.push({ id: `item-${itemId++}`, content: `Tecido: ${fabricContent}` });

  const liningContent = [
    data.composicao.forro.portugues,
    data.composicao.forro.ingles,
    data.composicao.forro.espanhol,
    data.composicao.forro.frances,
  ].join(" / ");
  items.push({ id: `item-${itemId++}`, content: `Forro: ${liningContent}` });

  // Care instructions
  items.push({
    id: `item-${itemId++}`,
    content: data.instrucoes_de_lavagem.lavagem,
  });
  items.push({
    id: `item-${itemId++}`,
    content: data.instrucoes_de_lavagem.alvejante,
  });

  data.instrucoes_de_lavagem.secagem.forEach((instruction) => {
    items.push({ id: `item-${itemId++}`, content: instruction });
  });

  items.push({
    id: `item-${itemId++}`,
    content: data.instrucoes_de_lavagem.passar,
  });
  items.push({
    id: `item-${itemId++}`,
    content: data.instrucoes_de_lavagem.limpeza_a_seco,
  });

  return items;
}
