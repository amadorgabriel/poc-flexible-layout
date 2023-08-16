import { Page } from "../types/Page.types";
import { Label } from "../types/Label.types";
import { Legislation } from "../types/Legislation.types";
import { ContentGroup } from "../types/ContentGroup.types";
import { createContext, useContext, useState } from "react";

import { pages as pagesMock } from "../mock/pages.mock";
import { labels as labelsMock } from "../mock/labels.mock";
import { legislations as legislationsMock } from "../mock/legislations.mock";
import { contentGroups as contentGroupsMock } from "../mock/contentGroups.mock";

interface LabelContextProps {
  children: React.ReactNode;
}

interface LabelContextProviderProps {
  label: Label;
  pages: Page[];
  contentGroups: ContentGroup[];
  legislation: Legislation;
  setLabel: (label: Label) => void;
  setPages: (pages: Page[]) => void;
  setContentGroups: (contentGroups: ContentGroup[]) => void;
}

const LabelContext = createContext({} as LabelContextProviderProps);

export const LabelProvider = ({ children }: LabelContextProps) => {
  const [label, setLabel] = useState<Label>(labelsMock[0]);
  const [pages, setPages] = useState<Page[]>(pagesMock);
  const [legislation, setLegislation] = useState<Legislation>(
    legislationsMock[label.legislationsId[0]]
  );
  const [contentGroups, setContentGroups] =
    useState<ContentGroup[]>(contentGroupsMock);

  const currPages = pages.filter((page) => page.labelId === label.id);
  const currContentGroups = contentGroups.filter((content) => {
    const pagesIds = currPages.map((page) => {
      return page.id;
    });

    return pagesIds.includes(content.pageId);
  });

  const handleUpdateLabel = (label: Label) => {
    setLabel(label);
  };

  const handleUpdatePages = (pages: Page[]) => {
    setPages(pages);
  };

  const handleUpdateContentGroups = (contentGroups: ContentGroup[]) => {
    setContentGroups(contentGroups);
  };

  return (
    <LabelContext.Provider
      value={{
        label,
        pages: currPages,
        contentGroups: currContentGroups,
        legislation,
        setLabel: handleUpdateLabel,
        setPages: handleUpdatePages,
        setContentGroups: handleUpdateContentGroups,
      }}
    >
      {children}
    </LabelContext.Provider>
  );
};

export const useLabelContext = () => useContext(LabelContext);
