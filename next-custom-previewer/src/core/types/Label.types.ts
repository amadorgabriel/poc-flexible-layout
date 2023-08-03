import { Company } from "./Company.types";
import { ContentGroup } from "./_common/ContentGroup.types";
import { LabelContainerSchema } from "./_common/LabelContainerSchema.types";

// legislation: null;
// labelTemplate?: LabelModel;
// format?: "single" | "multiple";
export type Label = {
  id: number;
  name: string;
  description: string;

  companies: Company[];

  //regras de diagramação
  layoutSchema: {
    container: LabelContainerSchema;
    contentGroup: ContentGroup;
  };
};
