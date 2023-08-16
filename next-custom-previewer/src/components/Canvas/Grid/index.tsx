import Image from "next/image";
import { Page } from "@/core/types/Page.types";
import { Layout, Responsive, WidthProvider } from "react-grid-layout";
import { ContentGroup } from "@/core/types/ContentGroup.types";
import { useState, useEffect, useRef, useCallback } from "react";

import PushPinIcon from "@mui/icons-material/PushPin";
import PushPinOutlinedIcon from "@mui/icons-material/PushPinOutlined";
import Rotate90DegreesCwIcon from "@mui/icons-material/Rotate90DegreesCw";
import VisibilityOffOutlined from "@mui/icons-material/VisibilityOffOutlined";

import "react-resizable/css/styles.css";
import "react-grid-layout/css/styles.css";

const ResponsiveGridLayout = WidthProvider(Responsive);

interface GridProps {
  page: Page;
  contentGroups: ContentGroup[];
}

export const Grid = ({ page, contentGroups }: GridProps) => {
  const gridRef = useRef<any>(null);
  const [isGrabbing, setIsGrabbing] = useState(false);

  const getCurrPageLayout = () => {
    const layout = contentGroups.map((contentGroup) => {
      return contentGroup.layout;
    });

    return layout;
  };

  const handleDropContentGroup = (newLayout: Layout[], layoutItem: Layout) => {
    const droppedContentGroup = {
      ...layoutItem,
    };
  };

  return (
    <ResponsiveGridLayout
      ref={gridRef}
      layouts={{ lg: getCurrPageLayout() }}
      // isBounded
      isDroppable
      compactType={"vertical"}
      preventCollision={false}
      cols={{
        lg: 1,
        md: 1,
        sm: 1,
        xs: 1,
        xxs: 1,
      }}
      breakpoints={{ lg: 12000, md: 12000, sm: 12000, xs: 12000, xxs: 12000 }}
      onResize={() => {}}
      onResizeStop={() => {}}
      onDrag={() => {
        setIsGrabbing(true);
      }}
      onDrop={(layout, layoutItem, event) => {
        handleDropContentGroup(layout, layoutItem);
      }}
      onDragStop={() => {
        setIsGrabbing(false);
      }}
      onLayoutChange={() => {}}
    >
      {contentGroups.map((content, index) => {
        const childs = content.children.elements;

        return (
          <div
            key={index}
            draggable={!content.layout.static}
            data-grid={content.layout}
            className={`grid-item ${
              content.layout.static ? "grid-item-static" : undefined
            }
              ${isGrabbing ? "grid-item-grabbing" : undefined}`}
          >
            <div
              className={`grid-item-content rotate-${content.rotateDeg || "0"}`}
            >
              {childs?.map((element, i) => {
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
          </div>
        );
      })}
    </ResponsiveGridLayout>
  );
};
