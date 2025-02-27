"use client";

import React, { useEffect, useMemo, useState } from "react";

import { useEditor } from "@/presentation/context/EditorContext";

import { BasicLabel } from "../Label/Basic";
import { PrintMenu } from "../FloatingMenu/PrintMenu";
import { FeaturesMenu } from "../FloatingMenu/FeaturesMenu";
import PageLayoutMenu from "../FloatingMenu/PageLayoutMenu";
import { ConfigurationMenu } from "../FloatingMenu/ConfigurationMenu";
import { VizualizationMenu } from "../FloatingMenu/VizualizationMenu";

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

      <div className="fixed bottom-18 right-4 ">
        <PageLayoutMenu />
      </div>

      <div className="fixed top-4 left-4 flex space-x-2 z-50">
        <FeaturesMenu />
      </div>

      <div className="fixed top-4 right-4 flex space-x-2 z-50">
        <ConfigurationMenu />
      </div>

      <div className="fixed bottom-4 right-4 flex space-x-2 z-50">
        <VizualizationMenu />
      </div>

      <div className="fixed bottom-4 left-4 flex z-50">
        <PrintMenu />
      </div>
    </div>
  );
};
