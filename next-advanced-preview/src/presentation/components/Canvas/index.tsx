"use client";

import React, { useState } from "react";

import { useEditor } from "@/presentation/context/EditorContext";

import { AdvancedLabel } from "../Label/Advanced";
import { Container, GridItem } from "@/core/types";
import { createGridItemsFromData } from "@/core/data/adapters/label.adapter";
import { FeaturesMenu } from "../FloatingMenu/FeaturesMenu";
import PageLayoutMenu from "../FloatingMenu/PageLayoutMenu";
import { ConfigurationMenu } from "../FloatingMenu/ConfigurationMenu";
import { VizualizationMenu } from "../FloatingMenu/VizualizationMenu";
import { labelData } from "@/core/data/label.const";
import { BasicLabel } from "../Label/Basic";

export const Canvas = () => {
  const { mode } = useEditor();

  const [zoom, setZoom] = useState(100);
  const [containers, setContainers] = useState<Container<GridItem>[]>([
    {
      id: "1",
      settings: {
        width: 10,
        height: 15,
        itemSpacing: 0.25,
        lineHeight: 1,
        margin: 0.25,
      },
      items: createGridItemsFromData(labelData),
    },
  ]);

  const handleZoomIn = () => {
    setZoom((prev) => Math.min(prev + 10, 150));
  };

  const handleZoomOut = () => {
    setZoom((prev) => Math.max(prev - 10, 50));
  };

  const handleSettingsChange = (
    containerId: string,
    newSettings: Container<any>["settings"]
  ) => {
    setContainers(
      containers.map((container) =>
        container.id === containerId
          ? { ...container, settings: newSettings }
          : container
      )
    );
  };

  return (
    <div className="relative w-full h-full">
      <div className="col-span-4 flex items-center justify-center w-full h-full">
        <div
          className="p-8 transition-transform duration-200"
          style={{
            transform: `scale(${zoom / 100})`,
            transformOrigin: "top left",
          }}
        >
          {mode === "basic"
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
              ))}
        </div>
      </div>

      <div className="fixed  bottom-18 right-4 ">
        <PageLayoutMenu
          settings={containers[0].settings}
          onSettingsChange={(settings) =>
            handleSettingsChange(containers[0].id, settings)
          }
        />
      </div>

      <div className="fixed top-4 left-4 flex space-x-2 z-50">
        <FeaturesMenu />
      </div>

      <div className="fixed top-4 right-4 flex space-x-2 z-50">
        <ConfigurationMenu />
      </div>

      <div className="fixed bottom-4 right-4 flex space-x-2 z-50">
        <VizualizationMenu
          zoom={zoom}
          handleZoomIn={handleZoomIn}
          handleZoomOut={handleZoomOut}
        />
      </div>
    </div>
  );
};
