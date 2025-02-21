import { Page } from "./Page";
import { useCallback, useEffect, useRef, useState } from "react";
import InfiniteViewer from "react-infinite-viewer";
import { useLabelContext } from "@/core/contexts/LabelContext";

const MAX_ZOOM_IN = 3;
const MAX_ZOOM_OUT = 0.2;

export const Canvas = () => {
  const [state, updateState] = useState<any>(null);

  const forceUpdate = useCallback(() => updateState({}), []);

  useEffect(() => {
    forceUpdate();
  }, [forceUpdate]);

  return (
    <div className="canvas">
      <CustomInfiniteViewer center={state !== null} />
    </div>
  );
};

const CustomInfiniteViewer = ({ center }: { center: boolean }) => {
  const { pages, contentGroups } = useLabelContext();

  const infiniteViewerRef = useRef<InfiniteViewer>(null);

  useEffect(() => {
    infiniteViewerRef.current?.scrollCenter();
  }, [center]);

  return (
    <InfiniteViewer
      className={`infinite-viewer`}
      ref={infiniteViewerRef}
      useAutoZoom
      zoomRange={[MAX_ZOOM_OUT, MAX_ZOOM_IN]}
      pinchThreshold={0}
      wheelScale={0.005}
      threshold={0}
      zoom={1}
      // useMouseDrag
    >
      <div className="viewport">
        {pages.map((page, index) => {
          const contents = contentGroups.filter(
            (item) => item.pageId === page.id
          );

          return (
            <Page
              key={index}
              page={page}
              pageContentGroups={contents}
              hasAddBtn={pages.length === index + 1}
            />
          );
        })}
      </div>
    </InfiniteViewer>
  );
};
