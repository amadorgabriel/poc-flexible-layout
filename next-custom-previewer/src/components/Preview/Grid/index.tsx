import { useState, useEffect } from "react";
import { Responsive, WidthProvider } from "react-grid-layout";

import { GridItemProps } from "@/@types/Grid.types";
import { initialGridLayout } from "@/utils/constants";
import { useBlockContext } from "@/contexts/BlockContext";

import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";

import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";

const ResponsiveGridLayout = WidthProvider(Responsive);

// GridItemWidth = 110px
export const Grid = () => {
  const { containerBlock } = useBlockContext();

  const [columnsAmount, setColumnsAmount] = useState<number>(
    containerBlock.cols.amount
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
      containerBlock.cols.amount !== columnsAmount &&
      !!containerBlock.cols.amount
    ) {
      setColumnsAmount(containerBlock.cols.amount);
    }
  }, [containerBlock, setColumnsAmount, columnsAmount]);

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
      rowHeight={146}
      maxRows={3}
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
