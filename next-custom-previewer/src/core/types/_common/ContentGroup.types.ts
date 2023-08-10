import { StaticImageData } from "next/image";

export type RotateDegreeType = "0" | "90" | "180" | "270" | "360";

export interface ContentGroup {
  hidden: boolean;
  rotateDegree: RotateDegreeType;
  elements: {
    groupName: string;
    groupings: GroupElement[];
  };
}

type GroupElement = {
  text?: string | null;
  image?: StaticImageData | null;
};
