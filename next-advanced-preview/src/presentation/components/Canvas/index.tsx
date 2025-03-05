"use client";

import React, { useEffect, useMemo } from "react";

import { useEditor } from "@/presentation/context/EditorContext";

import { BasicLabel } from "../Label/Basic";
import { PrintMenu } from "../../pages/main/components/floating-menu/PrintMenu";
import { FeaturesMenu } from "../../pages/main/components/floating-menu/FeaturesMenu";
import PageLayoutMenu from "../../pages/main/components/floating-menu/PageLayoutMenu";
import { ConfigurationMenu } from "../../pages/main/components/floating-menu/ConfigurationMenu";
import { VizualizationMenu } from "../../pages/main/components/floating-menu/VizualizationMenu";

export const Canvas = () => {
  const { editionMode, zoom, pageSettings, pages, onChangePages } = useEditor();

  const memoizedBasicLabel = useMemo(() => {
    return (
      <BasicLabel
        key={pages[0].id}
        id={pages[0].id}
        settings={pages[0].settings}
        items={pages[0].items}
      />
    );
  }, [pages]);

  useEffect(() => {
    onChangePages([
      {
        ...pages[0],
        settings: pageSettings,
      },
    ]);
  }, [pageSettings]);

  return (
    <div className="relative w-full h-full">
      <div className="col-span-4 flex items-center justify-center w-full h-full">
        <div
          className="transition-transform duration-200"
          style={{
            transform: `scale(${zoom / 100})`,
            transformOrigin: "top left",
          }}
        >
          {memoizedBasicLabel}

          {/* {editionMode === "basic"
            ? containers.map((container) => (
                <BasicLabel
                  key={container.id}
                  id={container.id}
                  settings={container.settings}
                  items={container.items}
                />
              ))
            : containers.map((container) => (
                <AdvancedLabel
                  key={container.id}
                  settings={container.settings}
                  items={labelData}
                />
              ))} */}
        </div>
      </div>

      <PageLayoutMenu />

      <ConfigurationMenu />

      <FeaturesMenu />

      <VizualizationMenu />

      <PrintMenu />
    </div>
  );
};
