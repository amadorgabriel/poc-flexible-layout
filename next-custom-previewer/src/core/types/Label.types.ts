import { Company } from "./Company.types";
import { Layout } from "react-grid-layout";
import { StaticImageData } from "next/image";
import { Container } from "./_common/Container.types";
import { ContentGroup } from "./_common/ContentGroup.types";

// legislation: null;
// labelTemplate?: LabelModel;
// format?: "single" | "multiple";
export type Label = {
  id: number;
  name: string;
  color?: string;
  size: string;

  company: Company;
  compositions: string[];
  responsibleNifs?: Array<string[]>;
  conservationSymbols: StaticImageData[];

  //regras de diagramação
  diagramationRules: {
    layout: Layout[];
    container: Container;
    contentGroups: ContentGroup[];
  };
};
