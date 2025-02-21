import React from "react";
import { LayoutPanelLeft, Settings } from "lucide-react";

interface ContainerSettings {
  width: number;
  height: number;
  itemSpacing: number;
  lineHeight: number;
  margin: number;
}

interface FloatingMenuProps {
  settings: ContainerSettings;
  onSettingsChange: (settings: ContainerSettings) => void;
}

const FloatingMenu: React.FC<FloatingMenuProps> = ({
  settings,
  onSettingsChange,
}) => {
  const handleChange = (field: keyof ContainerSettings, value: string) => {
    const numValue = parseFloat(value);
    if (!isNaN(numValue)) {
      onSettingsChange({
        ...settings,
        [field]: numValue,
      });
    }
  };

  return (
    <div className="bg-white rounded-md p-4 border border-slate-600">
      <div className="flex items-center mb-3">
        <LayoutPanelLeft className="w-4 h-4 mr-2" />
        <h3 className="text-sm font-medium">Página</h3>
      </div>
      <div className="space-y-3">
        <div>
          <label className="block text-xs text-gray-600 mb-1">Width (cm)</label>
          <input
            type="number"
            value={settings.width}
            onChange={(e) => handleChange("width", e.target.value)}
            className="w-full px-2 py-1 text-sm border rounded"
            step="0.1"
          />
        </div>
        <div>
          <label className="block text-xs text-gray-600 mb-1">
            Height (cm)
          </label>
          <input
            type="number"
            value={settings.height}
            onChange={(e) => handleChange("height", e.target.value)}
            className="w-full px-2 py-1 text-sm border rounded"
            step="0.1"
          />
        </div>
        <div>
          <label className="block text-xs text-gray-600 mb-1">
            Item Spacing (cm)
          </label>
          <input
            type="number"
            value={settings.itemSpacing}
            onChange={(e) => handleChange("itemSpacing", e.target.value)}
            className="w-full px-2 py-1 text-sm border rounded"
            step="0.1"
          />
        </div>
        <div>
          <label className="block text-xs text-gray-600 mb-1">
            Line Height (cm)
          </label>
          <input
            type="number"
            value={settings.lineHeight}
            onChange={(e) => handleChange("lineHeight", e.target.value)}
            className="w-full px-2 py-1 text-sm border rounded"
            step="0.1"
          />
        </div>
        <div>
          <label className="block text-xs text-gray-600 mb-1">
            Margin (cm)
          </label>
          <input
            type="number"
            value={settings.margin}
            onChange={(e) => handleChange("margin", e.target.value)}
            className="w-full px-2 py-1 text-sm border rounded"
            step="0.1"
          />
        </div>
      </div>
    </div>
  );
};

export default FloatingMenu;
