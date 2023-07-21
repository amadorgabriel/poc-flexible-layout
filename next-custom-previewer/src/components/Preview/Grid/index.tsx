import { Responsive, WidthProvider } from "react-grid-layout";
const ResponsiveGridLayout = WidthProvider(Responsive);

import { GridElement } from "@/components/Preview/Grid/GridElement.component";

export const Grid = () => {
  const layout = [
    { i: "blue-eyes-dragon", x: 0, y: 0, w: 1, h: 1 },
    { i: "dark-magician", x: 1, y: 0, w: 1, h: 1 },
    { i: "kuriboh", x: 2, y: 0, w: 1, h: 1 },
    { i: "spell-caster", x: 3, y: 0, w: 1, h: 1 },
    { i: "summoned-skull", x: 4, y: 0, w: 1, h: 1 },
  ];

  return (
    <ResponsiveGridLayout
      layouts={{ lg: layout }}
      breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
      rowHeight={300}
      width={1000}
    >
      <GridElement text="Texto 1" />
      <GridElement text="Texto 2" />
    </ResponsiveGridLayout>
  );
};
