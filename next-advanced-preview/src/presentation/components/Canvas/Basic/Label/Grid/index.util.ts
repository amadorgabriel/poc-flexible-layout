"use client";

import { Layout } from "react-grid-layout";

export const generateLayout = (): Layout[] => {
  return Array(3)
    .fill(null)
    .map((_: any, i: number) => {
      var y = Math.ceil(Math.random() * 4) + 1;

      return {
        x: Math.round(Math.random() * 5) * 2,
        y: Math.floor(i / 6) * y,
        w: 2,
        h: y,
        i: i.toString(),
        static: Math.random() < 0.05,
        resizeHandles: ["se"],
      };
    });
};
