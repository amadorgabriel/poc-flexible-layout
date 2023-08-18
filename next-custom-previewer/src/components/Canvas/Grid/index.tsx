import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { Page } from "@/core/types/Page.types";
import { ContentGroup } from "@/core/types/ContentGroup.types";
import { Layout, Responsive, WidthProvider } from "react-grid-layout";

import "react-resizable/css/styles.css";
import "react-grid-layout/css/styles.css";

const ResponsiveGridLayout = WidthProvider(Responsive);
const GLOBAL_BREAKPOINTS = 12000;

interface GridProps {
  page: Page;
  pageContentGroups: ContentGroup[];
}

export const Grid = ({ page, pageContentGroups }: GridProps) => {
  const gridRef = useRef<any>(null);

  const [mounted, setmounted] = useState(false);
  const [isGrabbing, setIsGrabbing] = useState(false);

  const getCurrPageLayout = () => {
    const layout = pageContentGroups.map((contentGroup) => {
      return contentGroup.layout;
    });

    return layout;
  };

  const handleDropContentGroup = (newLayout: Layout[], layoutItem: Layout) => {
    console.log(newLayout);
    console.log(layoutItem);

    const droppedContentGroup = {
      ...layoutItem,
    };
  };

  useEffect(() => {
    setmounted(true);
  }, []);

  return (
    <ResponsiveGridLayout
      ref={gridRef}
      layouts={{ lg: getCurrPageLayout() }}
      cols={{
        lg: 1,
        md: 1,
        sm: 1,
        xs: 1,
        xxs: 1,
      }}
      breakpoints={{
        lg: GLOBAL_BREAKPOINTS,
        md: GLOBAL_BREAKPOINTS,
        sm: GLOBAL_BREAKPOINTS,
        xs: GLOBAL_BREAKPOINTS,
        xxs: GLOBAL_BREAKPOINTS,
      }}
      isDroppable
      rowHeight={30}
      compactType={"vertical"}
      measureBeforeMount={false}
      useCSSTransforms={mounted}
      onDrag={() => {
        setIsGrabbing(true);
      }}
      onDragStop={() => {
        setIsGrabbing(false);
      }}
      onDrop={(layout, layoutItem) => {
        handleDropContentGroup(layout, layoutItem);
      }}
    >
      {pageContentGroups.map((content, index) => {
        const childs = content.children.elements;

        return (
          <div
            key={index}
            // draggable={!content.layout.static}
            data-grid={content.layout}
            className={`grid-item ${
              content.layout.static ? "grid-item-static" : undefined
            }
              ${isGrabbing ? "grid-item-grabbing" : undefined}`}
          >
            <div className={`grid-item-content`}>
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
