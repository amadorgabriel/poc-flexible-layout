import React from "react";
import { LayoutPanelLeft } from "lucide-react";
import { useEditor } from "@/presentation/context/EditorContext";
import { EditorPageSettings } from "@/presentation/context/EditorContext/index.types";

const PageLayoutMenu = () => {
  const { onChangePageSetting, pageSettings } = useEditor();

  const handleChange = (field: keyof EditorPageSettings, value: string) => {
    const numValue = parseFloat(value);

    onChangePageSetting(field, numValue);
  };

  return (
    <div className="bg-white rounded-md p-4 border border-slate-600 w-72">
      <div className="flex items-center mb-3">
        <LayoutPanelLeft className="w-4 h-4 mr-2" />
        <h3 className="text-sm font-medium">Página:</h3>
      </div>
      <div className="space-y-3">
        <div>
          <label className="block text-xs text-gray-600 mb-1">
            Largura (mm)
          </label>
          <input
            type="number"
            value={pageSettings.width}
            onChange={(e) => handleChange("width", e.target.value)}
            className="w-full px-2 py-1 text-sm border rounded"
            step="0.1"
          />
        </div>
        <div>
          <label className="block text-xs text-gray-600 mb-1">
            Altura (mm)
          </label>
          <input
            type="number"
            value={pageSettings.height}
            onChange={(e) => handleChange("height", e.target.value)}
            className="w-full px-2 py-1 text-sm border rounded"
            step="0.1"
          />
        </div>
        <div>
          <label className="block text-xs text-gray-600 mb-1">
            Espaçamento entre os items (mm)
          </label>
          <input
            type="number"
            value={pageSettings.itemSpacing}
            onChange={(e) => handleChange("itemSpacing", e.target.value)}
            className="w-full px-2 py-1 text-sm border rounded"
            step="0.1"
          />
        </div>
        <div>
          <label className="block text-xs text-gray-600 mb-1">
            Tamanho da fonte (mm)
          </label>
          <input
            type="number"
            value={pageSettings.fontSize}
            onChange={(e) => {
              handleChange("lineHeight", e.target.value);
              handleChange("fontSize", e.target.value);
            }}
            className="w-full px-2 py-1 text-sm border rounded"
            step="0.1"
          />
        </div>
        <div>
          <label className="block text-xs text-gray-600 mb-1">
            Margem (mm)
          </label>
          <input
            type="number"
            value={pageSettings.margin}
            onChange={(e) => handleChange("margin", e.target.value)}
            className="w-full px-2 py-1 text-sm border rounded"
            step="0.1"
          />
        </div>
      </div>
    </div>
  );
};

export default PageLayoutMenu;
