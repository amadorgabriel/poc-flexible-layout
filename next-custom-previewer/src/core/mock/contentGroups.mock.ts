import { pages } from "./pages.mock";
import { labels } from "./labels.mock";
import { ContentGroup } from "@/core/types/ContentGroup.types";

// layout.i deve ser um igual ao contentGroup.id
export const contentGroups: ContentGroup[] = [
  {
    id: 0,
    pageId: 0,
    layout: {
      i: "0",
      x: 0,
      y: 0,
      w: 1,
      h: 1,
      minW: 1,
      maxW: 1,
      minH: 1,
      maxH: 1,
      static: true,
    },
    hidden: false,
    rotateDeg: "0",
    children: {
      name: "Logo",
      elements: [
        {
          image: labels[pages[0].labelId].company.logo,
        },
      ],
    },
  },
  {
    id: 1,
    pageId: 0,
    layout: {
      i: "1",
      x: 0,
      y: 1,
      w: 1,
      h: 1,
      minW: 1,
      minH: 1,
    },
    hidden: false,
    rotateDeg: "0",
    children: {
      name: "Empresa",
      elements: [
        {
          text: labels[pages[0].labelId].company.name,
        },
      ],
    },
  },
  {
    id: 2,
    pageId: 0,
    layout: {
      i: "2",
      x: 0,
      y: 2,
      w: 1,
      h: 1,
      minW: 1,
      minH: 1,
    },
    hidden: false,
    rotateDeg: "90",
    children: {
      name: "Composições",
      elements: [
        {
          text: labels[pages[0].labelId].compositions.join("/"),
        },
      ],
    },
  },
  {
    id: 3,
    pageId: 1,
    layout: {
      i: "3",
      x: 0,
      y: 1,
      w: 1,
      h: 1,
      minW: 1,
      minH: 1,
    },
    hidden: false,
    rotateDeg: "0",
    children: {
      name: "Cor",
      elements: [
        {
          text: labels[pages[1].labelId].color,
        },
      ],
    },
  },
];
