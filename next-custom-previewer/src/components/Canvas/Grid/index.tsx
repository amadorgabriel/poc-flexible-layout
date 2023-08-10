import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { Layout, Responsive, WidthProvider } from "react-grid-layout";
import { useLabelContext } from "@/core/contexts/LabelContext";
import { RotateDegreeType } from "@/core/types/_common/ContentGroup.types";

import PushPinIcon from "@mui/icons-material/PushPin";
import PushPinOutlinedIcon from "@mui/icons-material/PushPinOutlined";
import Rotate90DegreesCwIcon from "@mui/icons-material/Rotate90DegreesCw";
import VisibilityOffOutlined from "@mui/icons-material/VisibilityOffOutlined";

import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";

const ResponsiveGridLayout = WidthProvider(Responsive);

export const Grid = () => {
  // Encontrar tipo do ResponsiveGridLayout
  const gridRef = useRef<any>(null);
  const {
    container,
    setContainer,
    contentGroups,
    setContentGroups,
    layout,
    setLayout,
  } = useLabelContext();
  const [updateComponent, forceUpdate] = useState(false);

  const [isGrabbing, setIsGrabbing] = useState(false);
  const [columnsAmount, setColumnsAmount] = useState<number>(
    container.cols.amount
  );

  function updateContainerDimensions() {
    const gridHeight = gridRef.current?.elementRef.current.clientHeight;
    const gridWidth = gridRef.current?.elementRef.current.clientWidth;

    setContainer({
      ...container,
      dimensions: {
        ...container.dimensions,
        width: gridWidth,
        height: gridHeight,
      },
    });
  }

  const getRowHeight = () => {
    let rowsQty = 1;

    layout.map((item, i) => {
      const currRowQty = item.y + item.h;

      if (i === 0) {
        rowsQty = currRowQty;
        return;
      }

      rowsQty = rowsQty > currRowQty ? rowsQty : currRowQty;
    });

    const sumBetweenYGaps = (rowsQty + 1) * container.cols.rowGap;
    const currRowHeight =
      (container.dimensions.height - sumBetweenYGaps) / rowsQty;

    return currRowHeight;
  };

  function handleHide(contentGroupIndex: number) {
    const newContentGroups = contentGroups.map((group, index) => {
      if (contentGroupIndex === index) {
        return {
          ...group,
          hidden: true,
        };
      }

      return group;
    });

    setContentGroups(newContentGroups);
  }

  function handleRotate(contentGroupIndex: number) {
    let newContentGroups = contentGroups;

    const currRotateDegree =
      contentGroups[contentGroupIndex].rotateDegree || "0";

    const nextDegree =
      Number(currRotateDegree) + 90 === 360 ? 0 : Number(currRotateDegree) + 90;

    newContentGroups[contentGroupIndex].rotateDegree = String(
      nextDegree
    ) as RotateDegreeType;

    setContentGroups(newContentGroups);
    
    forceUpdate((prev) => !prev);

  }

  function handleTogglePin(layoutIndex: number) {
    const newLayout = layout.map((currLayout, index) => {
      if (layoutIndex === index) {
        return {
          ...currLayout,
          static: !currLayout.static,
        };
      }

      return currLayout;
    });

    setLayout(newLayout);
  }

  // function sanitizeLayoutSchema(contentGroup: ContentGroupItem[]): Layouts {
  //   const layouts: Layout[] = contentGroup?.map((group) => {
  //     return {
  //       i: group.i,
  //       y: group.y,
  //       x: group.x,
  //       w: group.w,
  //       h: group.h,
  //       minW: group.minW,
  //       maxW: group.maxW,
  //       minH: group.minH,
  //       maxH: group.maxH,
  //       moved: group.moved,
  //       static: group.static,
  //       isDraggable: group.isDraggable,
  //       isResizable: group.isResizable,
  //       resizeHandles: group.resizeHandles,
  //       isBounded: group.isBounded,
  //     };
  //   });

  //   return { lg: layouts };
  // }

  useEffect(() => {
    // update when cols changes
    if (container.cols.amount !== columnsAmount && !!container.cols.amount) {
      setColumnsAmount(container.cols.amount);
    }
  }, [container, setColumnsAmount, columnsAmount]);

  // update layout
  useEffect(() => {
    forceUpdate((prev) => !prev);

    // update container dimensions
  }, [updateComponent, container, layout]);

  return (
    <ResponsiveGridLayout
      ref={gridRef}
      layouts={{ lg: layout }}
      isBounded
      compactType={"vertical"}
      preventCollision={false}
      cols={{
        lg: columnsAmount,
        md: columnsAmount,
        sm: columnsAmount,
        xs: columnsAmount,
        xxs: columnsAmount,
      }}
      margin={[container.cols.colGap, container.cols.rowGap]}
      breakpoints={{ lg: 12000, md: 12000, sm: 12000, xs: 12000, xxs: 12000 }}
      //---
      // rowHeight={rowHeight}
      // maxRows={6}
      onResize={updateContainerDimensions}
      onResizeStop={updateContainerDimensions}
      onDrag={() => {
        setIsGrabbing(true);
        updateContainerDimensions();
      }}
      onDragStop={() => {
        setIsGrabbing(false);
        updateContainerDimensions();
      }}
      onLayoutChange={(currLayout, allLayouts) => {
        console.log("test");

        // const layout = [
        //   ...currLayout,
        //   ...layoutSchema.lg,
        // ] as ContentGroupItem[];

        // setLayoutSchema({
        //   lg: layout,
        // });

        // setLayoutSchema({
        //   lg: { ...(layout as ContentGroupItem[]) },
        // });
      }}
    >
      {contentGroups.map((group, index) => {
        if (group.hidden) return;

        const groups = group.elements?.groupings;

        const gridItemWidth =
          group.rotateDegree === "90" || group.rotateDegree === "270"
            ? `${getRowHeight()}px`
            : "100%";

        return (
          <div
            key={index}
            data-grid={group}
            className={`grid-item ${
              layout[index].static ? "grid-item-static" : undefined
            }
              ${isGrabbing ? "grid-item-grabbing" : undefined}`}
          >
            <div
              style={{ width: gridItemWidth }}
              className={`grid-item-content rotate-${
                group.rotateDegree || "0"
              }`}
            >
              {groups?.map((element, i) => {
                return (
                  <span key={i}>
                    {element.text && <p>{element.text}</p>}
                    {element.image && (
                      <Image
                        src={element.image.src}
                        alt="generic-alt"
                        width={100}
                        height={100}
                      />
                    )}
                  </span>
                );
              })}
            </div>

            <div className="grid-item-options">
              <button onClick={() => handleHide(index)} title="Esconder">
                <VisibilityOffOutlined sx={iconSettingSx} />
              </button>

              <button
                title="Girar"
                onClick={() => {
                  handleRotate(index);
                }}
              >
                <Rotate90DegreesCwIcon sx={iconSettingSx} />
              </button>

              <button
                onClick={() => handleTogglePin(index)}
                title={layout[index].static ? "Desafixar" : "Fixar"}
              >
                {layout[index].static ? (
                  <PushPinIcon sx={iconSettingSx} />
                ) : (
                  <PushPinOutlinedIcon sx={iconSettingSx} />
                )}
              </button>
            </div>
          </div>
        );
      })}
    </ResponsiveGridLayout>
  );
};

const iconSettingSx = {
  fontSize: 14,
  margin: 0.5,
};
