"use client";

import React, { useEffect, useState } from "react";

import { useEditor } from "@/presentation/context/EditorContext";

import { AdvancedCanvas } from "./Advanced";
import { LabelAside } from "../Aside";
import { ZoomIn, ZoomOut } from "lucide-react";
import { BasicGrid } from "./Basic/Label/Grid";
import { Container, LabelData } from "@/core/types";
import { createGridItemsFromData } from "@/core/data/adapters/label.adapter";
import { TaskAside } from "../Aside/TaskAside";
import FloatingMenu from "../FloatingMenu";

const labelData: LabelData = {
  empresa: {
    nome: "Etiqueta Certa",
    cnpj: "22.949.494/0001-98",
    origem: {
      portugues: "Feito no Brasil",
      ingles: "Made in Brazil",
      espanhol: "Hecho en Brasil",
      frances: "Fabriqué en Brésil",
    },
  },
  codigo: "34/0",
  composicao: {
    tecido: {
      portugues: "100% Algodão",
      ingles: "100% Cotton",
      espanhol: "100% Algodón",
      frances: "100% Coton",
    },
    forro: {
      portugues: "100% Poliéster",
      ingles: "100% Polyester",
      espanhol: "100% Poliéster",
      frances: "100% Polyester",
    },
  },
  instrucoes_de_lavagem: {
    lavagem: "Machine wash, warm, 40 °C (105 °F), normal cycle",
    alvejante: "Do not bleach",
    secagem: ["Tumble dry, low", "Line dry in the shade"],
    passar: "Iron, low",
    limpeza_a_seco: "Do not dryclean",
  },
};

const Canvas = () => {
  const { mode } = useEditor();

  const [zoom, setZoom] = useState(100);
  const [containers, setContainers] = useState<Container[]>([
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
    newSettings: Container["settings"]
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
          {mode === "basic" ? (
            containers.map((container) => (
              <BasicGrid
                key={container.id}
                id={container.id}
                settings={container.settings}
                items={container.items}
              />
            ))
          ) : (
            <AdvancedCanvas />
          )}
        </div>
      </div>

      <div className="fixed  bottom-18 right-4 ">
        <FloatingMenu
          settings={containers[0].settings}
          onSettingsChange={(settings) =>
            handleSettingsChange(containers[0].id, settings)
          }
        />
      </div>

      <div className="fixed top-4 left-4 flex space-x-2 z-50">
        <TaskAside />
      </div>

      <div className="fixed top-4 right-4 flex space-x-2 z-50">
        <LabelAside />
      </div>

      <div className="fixed bottom-4 right-4 flex space-x-2 z-50">
        <button
          onClick={handleZoomOut}
          className="p-2 border border-slate-800 cursor-pointer bg-white rounded-sm shadow-lg hover:bg-gray-50"
        >
          <ZoomOut className="w-5 h-5" />
        </button>
        <button
          onClick={handleZoomIn}
          className="p-2 border border-slate-800 cursor-pointer bg-white rounded-sm shadow-lg hover:bg-gray-50"
        >
          <ZoomIn className="w-5 h-5" />
        </button>

        <div className="flex items-center justify-center px-3 bg-white rounded-sm shadow-lg border border-slate-800">
          {zoom}%
        </div>
      </div>
    </div>
  );
};

export default Canvas;
