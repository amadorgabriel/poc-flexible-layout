import { Grid } from "./Grid";
import { useLabelContext } from "@/core/contexts/LabelContext";

export const Canvas = () => {
  const { label, pages, contentGroups } = useLabelContext();

  return (
    <div className="canvas">
      {pages.map((page) => {
        const contents = contentGroups.filter(
          (item) => item.pageId === page.id
        );

        const pageW =
          pages[label.diagramation.pagesId[page.id]].dimensions.width;
        const pageH =
          pages[label.diagramation.pagesId[page.id]].dimensions.height;

        return (
          <div
            key={page.id}
            className="static-container"
            style={{
              width: pageW,
              height: pageH,
            }}
          >
            <Grid page={page} contentGroups={contents} />
          </div>
        );
      })}
    </div>
  );
};
