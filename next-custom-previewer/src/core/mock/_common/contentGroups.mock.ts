import { companies } from "../companies.mock";
import { ContentGroup } from "@/core/types/_common/ContentGroup.types";

export const contentGroups: Array<ContentGroup[]> = [
  [
    {
      hidden: false,
      rotateDegree: "0",
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
      hidden: false,
      rotateDegree: "0",
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
];
