import { ContentGroup } from "../../types/_common/ContentGroup.types";
import { companies } from "../company.mock";

import logoEtiquetaCerta from "@/assets/img/label-pro.png";

// implementar as grades de tamanho, simbologia e tecidos
export const contentGroups: Record<number, ContentGroup> = {
  0: {
    id: 0,
    groups: [
      {
        i: "a",
        x: 0,
        y: 0,
        w: 1,
        h: 1,
        minW: 1,
        maxW: 1,
        minH: 1,
        maxH: 1,
        static: true,
        hidden: false,
        elements: {
          groupName: "Logo",
          groupings: [
            {
              image: companies[0].logoImage,
            },
          ],
        },
      },
      {
        i: "b",
        x: 0,
        y: 1,
        w: 1,
        h: 1,
        minW: 1,
        minH: 1,
        hidden: false,
        elements: {
          groupName: "NIF",
          groupings: [
            {
              text: companies[0].name,
            },
            {
              text: `${companies[0].nifPrefix}: ${companies[0].nif}`,
            },
          ],
        },
      },
      {
        i: "c",
        x: 0,
        y: 2,
        w: 1,
        h: 1,
        minW: 1,
        minH: 1,
        hidden: false,
        rotateDegree: "90",
        elements: {
          groupName: "Empresa",
          groupings: [
            {
              text: `${companies[0].contryNamePrefix} ${companies[0].contryName}`,
            },
          ],
        },
      },
    ],
  },
};
