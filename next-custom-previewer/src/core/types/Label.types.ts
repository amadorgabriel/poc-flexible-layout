import { StaticImageData } from "next/image";

export type Label = {
  id: number;
  legislationsId: Array<number>;

  name: string;
  color: string;
  compositions: string[];
  company: {
    name: string;
    logo: StaticImageData;
  };

  // diagramation rules
  diagramation: {
    pagesId: Array<number>;
    contentGroupsId: Array<number>;
  };
};
