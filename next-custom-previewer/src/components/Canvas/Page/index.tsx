import { Grid } from "../Grid";
import { generateUUID } from "@/utils/generate-uuid";
import { Page as PageType } from "@/core/types/Page.types";
import { Page as PageTypes } from "@/core/types/Page.types";
import { ContentGroup } from "@/core/types/ContentGroup.types";
import { useLabelContext } from "@/core/contexts/LabelContext";
import { contentGroups } from "@/core/mock/contentGroups.mock";

interface PageProps {
  page: PageType;
  pageContentGroups: ContentGroup[];
  hasAddBtn: boolean;
}

export const Page = ({ page, pageContentGroups, hasAddBtn }: PageProps) => {
  const { pages, setPages, setContentGroups } = useLabelContext();

  const pageW = page.dimensions.width;
  const pageH = page.dimensions.height;

  const handleAddNewPage = () => {
    const page: PageTypes = {
      ...pages[0],
      id: generateUUID(),
      name: "Página Nova",
    };

    setPages([...pages, page]);
  };

  const handleDeletePage = () => {
    if (pageContentGroups.length > 0) {
      alert("Essa página possui conteúdos internos, remova-os para continuar.");
      return;
    }

    const newPages = pages.filter((item) => item.id !== page.id);

    setPages(newPages);
  };

  return (
    <div
      key={page.id}
      className="static-container"
      style={{
        width: pageW,
        height: pageH,
      }}
    >
      <span className="scissor-dashed">
        <hr></hr>
      </span>

      <Grid page={page} pageContentGroups={pageContentGroups} />

      <button
        style={{
          top: "-23px",
          width: `${pageW}px`,
        }}
        className="remove-top-button"
        title="Remover"
        onClick={handleDeletePage}
      >
        ×
      </button>

      {hasAddBtn && (
        <>
          <button
            style={{
              right: "-23px",
              height: `${pageH}px`,
            }}
            className="add-right-button"
            title="Nova página"
            onClick={handleAddNewPage}
          >
            +
          </button>
        </>
      )}
    </div>
  );
};
