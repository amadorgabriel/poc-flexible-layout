import { Layout } from "react-grid-layout";
import { StaticImageData } from "next/image";

export type RotateDegreeType = "0" | "90" | "180" | "270" | "360";

type Element = {
  text?: string | null;
  image?: StaticImageData | null;
};

export interface ContentGroup {
  id: number;
  pageId: number;

  layout: Layout;
  hidden: boolean;
  rotateDeg: RotateDegreeType;

  children: {
    name: string;
    elements: Element[];
  };
}
