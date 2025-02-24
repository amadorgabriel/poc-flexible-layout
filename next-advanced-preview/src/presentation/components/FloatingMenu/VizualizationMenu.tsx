import { ZoomIn, ZoomOut } from "lucide-react";

interface VizualizationMenuProps {
  zoom: number;
  handleZoomIn: () => void;
  handleZoomOut: () => void;
}

export const VizualizationMenu = ({
  zoom,
  handleZoomIn,
  handleZoomOut,
}: VizualizationMenuProps) => {
  return (
    <>
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
    </>
  );
};
