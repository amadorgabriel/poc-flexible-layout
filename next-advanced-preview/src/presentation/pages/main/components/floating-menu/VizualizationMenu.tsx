import { ZoomIn, ZoomOut } from "lucide-react";

import { useEditor } from "@/presentation/context/EditorContext";
import { FloatingMenu } from "@/presentation/components/DataDisplay/FloatingMenu";

export const VizualizationMenu = () => {
  const { zoom, onZoomIn, onZoonOut } = useEditor();

  return (
    <FloatingMenu className="bottom-4 right-4" variant="transparent">
      <div className="flex justify-end space-x-2">
        <button
          onClick={onZoonOut}
          className="p-2 border border-slate-800 cursor-pointer bg-white rounded-sm shadow-lg hover:bg-gray-50"
        >
          <ZoomOut className="w-5 h-5" />
        </button>
        <button
          onClick={onZoomIn}
          className="p-2 border border-slate-800 cursor-pointer bg-white rounded-sm shadow-lg hover:bg-gray-50"
        >
          <ZoomIn className="w-5 h-5" />
        </button>

        <div className="flex items-center justify-center px-3 bg-white rounded-sm shadow-lg border border-slate-800">
          {zoom}%
        </div>
      </div>
    </FloatingMenu>
  );
};
