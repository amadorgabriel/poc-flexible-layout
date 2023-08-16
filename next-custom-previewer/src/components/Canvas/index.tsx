import { Page } from "./Page";

import { useLabelContext } from "@/core/contexts/LabelContext";

export const Canvas = () => {
  const { pages, contentGroups } = useLabelContext();
  
  return (
    <div className="canvas">
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
  );
};
