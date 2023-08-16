import { Page } from "../types/Page.types";
import { Label } from "../types/Label.types";
import { ContentGroup } from "../types/ContentGroup.types";
import { createContext, useContext, useState } from "react";

import { pages as pagesMock } from "../mock/pages.mock";
import { labels as labelsMock } from "../mock/labels.mock";
import { contentGroups as contentGroupsMock } from "../mock/contentGroups.mock";

interface LabelContextProps {
  children: React.ReactNode;
}

interface LabelContextProviderProps {
  label: Label;
  setLabel: (label: Label) => void;
  pages: Page[];
  contentGroups: ContentGroup[];
}

const LabelContext = createContext({} as LabelContextProviderProps);

export const LabelProvider = ({ children }: LabelContextProps) => {
  const [label, setLabel] = useState<Label>(labelsMock[0]);
  const [pages, setPages] = useState<Page[]>(pagesMock);
  const [contentGroups, setContentGroups] =
    useState<ContentGroup[]>(contentGroupsMock);

  const handleUpdateLabel = (label: Label) => {
    setLabel(label);
  };

  return (
    <LabelContext.Provider
      value={{
        label,
        pages,
        contentGroups,
        setLabel: handleUpdateLabel,
      }}
    >
      {children}
    </LabelContext.Provider>
  );
};

export const useLabelContext = () => useContext(LabelContext);
