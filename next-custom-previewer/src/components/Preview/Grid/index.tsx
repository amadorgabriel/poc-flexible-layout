import _ from "lodash";
import { useState, useEffect } from "react";
import { Responsive, WidthProvider } from "react-grid-layout";
import { Container } from "../Container";


import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";

interface GridProps {
  // domElements: any[];
  rowHeight?: number;
  onLayoutChange?: (layout: any, layouts: any) => void;
  cols?: any;
  breakpoints?: any;
  // containerPadding?: number[];
}

const ResponsiveGridLayout = WidthProvider(Responsive);

// GridItemWidth = 110px
export const Grid = ({
  rowHeight = 30,
  cols = { lg: 6, md: 5, sm: 4, xs: 3, xxs: 2 },
  breakpoints = { lg: 660, md: 550, sm: 440, xs: 330, xxs: 220 },
}: GridProps) => {
  const [layouts, setLayouts] = useState<{ [index: string]: any[] }>({
    md: _.map(_.range(0, 6), function (_, i) {
      var y = Math.ceil(Math.random() * 4) + 1;
      return {
        x: (5 * 2) % 12,
        y: Math.floor(i / 6) * y,
        w: 1,
        h: y,
        i: i.toString(),
        static: Math.random() < 0.05,
      };
    }),
  });
  const [currentBreakpoint, setCurrentBreakpoint] = useState<string>("md");
  const [mounted, setMounted] = useState(false);
  const [toolbox, setToolbox] = useState<{ [index: string]: any[] }>({
    md: [],
  });

  useEffect(() => {
    setMounted(true);
  }, []);

  const onBreakpointChange = (breakpoint: any) => {
    setCurrentBreakpoint(breakpoint);
    setToolbox({
      ...toolbox,
      [breakpoint]: toolbox[breakpoint] || toolbox[currentBreakpoint] || [],
    });
  };

  const onLayoutChange = (layout: any, layouts: any) => {
    setLayouts({ ...layouts });
  };

  const generateDOM = () => {
    return _.map(layouts.md, function (l, i) {
      return (
        <div key={i} style={{ background: "#ccc" }}>
          <span className="text">{i}</span>
        </div>
      );
    });
  };

  return (
    <ResponsiveGridLayout
      cols={cols}
      rowHeight={rowHeight}
      breakpoints={breakpoints}

      compactType={"vertical"}
      preventCollision={false}
      
      style={{ background: "#ffca" }}
      // ---
      layouts={layouts}
      measureBeforeMount={true}
      useCSSTransforms={mounted}
      onLayoutChange={onLayoutChange}
      onBreakpointChange={onBreakpointChange}
      onWidthChange={() => {
        console.log("test")
      }}
      isDroppable
    >
      {generateDOM()}
      <Container flag={true} />
    </ResponsiveGridLayout>
  );
};
