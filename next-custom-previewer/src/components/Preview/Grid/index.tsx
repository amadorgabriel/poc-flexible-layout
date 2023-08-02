import { useState, useEffect } from "react";
import { Responsive, WidthProvider } from "react-grid-layout";

import { GridItemProps } from "@/@types/Grid.types";
import { initialGridLayout } from "@/utils/constants";
import { useContainerContext } from "@/contexts/ContainerContext";

import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";

import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";

const ResponsiveGridLayout = WidthProvider(Responsive);

// GridItemWidth = 110px
export const Grid = () => {
  const { container } = useContainerContext();

  const [columnsAmount, setColumnsAmount] = useState<number>(
    container.cols.amount
  );

  const [layouts, setLayouts] = useState<Record<string, GridItemProps[]>>({
    lg: initialGridLayout,
  });

  function handleToggleVisibility(id: string) {
    const newState = layouts.lg.map((item) => {
      if (item.i === id) {
        item.hidden = !item.hidden;
      }

      return item;
    });

    setLayouts({ lg: newState });
  }

  useEffect(() => {
    if (
      container.cols.amount !== columnsAmount &&
      !!container.cols.amount
    ) {
      setColumnsAmount(container.cols.amount);
    }
  }, [container, setColumnsAmount, columnsAmount]);

  return (
    <ResponsiveGridLayout
      className="grid-layout"
      layouts={layouts}
      breakpoints={{ lg: 12000, md: 12000, sm: 12000, xs: 12000, xxs: 12000 }}
      cols={{
        lg: columnsAmount,
        md: columnsAmount,
        sm: columnsAmount,
        xs: columnsAmount,
        xxs: columnsAmount,
      }}
      //---
      isBounded
      compactType={"vertical"}
      preventCollision={false}
      //---
      // rowHeight={146}
      // maxRows={3}
      margin={[container.cols.colGap, container.cols.rowGap]}
      style={{ background: "#ffca" }}
    >
      {layouts.lg.map(
        (item, index) =>
          !item.hidden && (
            <div
              key={index}
              style={{ backgroundColor: "#ccc" }}
              data-grid={item}
            >
              <span className="text">{item.i}</span>
              <span
                className="grid-item-visibility"
                onClick={() => handleToggleVisibility(item.i)}
              >
                <button>
                  {item.hidden ? (
                    <VisibilityOffOutlinedIcon
                      sx={{
                        fontSize: 20,
                        margin: 0.5,
                      }}
                    />
                  ) : (
                    <VisibilityOutlinedIcon
                      sx={{
                        fontSize: 20,
                        margin: 0.5,
                      }}
                    />
                  )}
                </button>
              </span>
            </div>
          )
      )}
    </ResponsiveGridLayout>
  );
};
