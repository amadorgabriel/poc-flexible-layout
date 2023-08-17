import { useRef, useState } from "react";
import { Page } from "./Page";
import InfiniteViewer from "react-infinite-viewer";
import { useLabelContext } from "@/core/contexts/LabelContext";

export const Canvas = () => {
  const { pages, contentGroups } = useLabelContext();

  const [zoom, setZoom] = useState<number>();

  const infiniteViewerRef = useRef<any>();

  return (
    <div className="canvas">
      <InfiniteViewer
        ref={infiniteViewerRef}
        usePinch={true}
        pinchThreshold={50}
        className="infinite-viewer"
        style={{
          width: `${infiniteViewerRef.current?.width + "px" || "100%"}`,
        }}
        zoom={zoom}
        onPinch={(e) => {
          setZoom(e.zoom);
        }}
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
    </div>
  );
};
