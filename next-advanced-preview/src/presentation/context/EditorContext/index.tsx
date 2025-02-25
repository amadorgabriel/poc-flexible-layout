import React, {
  createContext,
  CSSProperties,
  useContext,
  useRef,
  useState,
} from "react";
import {
  EditorContextProps,
  EditorPageSettings,
  EditorProviderProps,
  IEditorMode,
} from "./index.types";
import { useReactToPrint, UseReactToPrintOptions } from "react-to-print";

const EditorContext = createContext<EditorContextProps | undefined>(undefined);

export const EditorProvider: React.FC<EditorProviderProps> = ({
  initialMode,
  children,
}) => {
  const [zoom, setZoom] = useState(100);
  const [editionMode, setEditionMode] = useState<IEditorMode>(initialMode);
  const [printOptions, setPrintOptions] = useState<UseReactToPrintOptions>({});
  const [pageSettings, setPageSettings] = useState<EditorPageSettings>({
    width: 30.3, //mm
    height: 50.4, //mm
    itemSpacing: 2, //mm
    lineHeight: 2, //mm
    margin: 2, //mm
    fontSize: 2, //mm
  });

  const printRef = useRef<HTMLDivElement>(null);

  const onChangeEditionMode = (mode: IEditorMode) => {
    if (mode === editionMode) return;

    setEditionMode(mode);
  };

  const handleZoomIn = () => {
    setZoom((prev) => Math.min(prev + 10, 200));
  };

  const handleZoomOut = () => {
    setZoom((prev) => Math.max(prev - 10, 50));
  };

  const getPrintStyles = (): string => {
    const stylesObj: Record<"page" | "body", any> = {
      page: {
        size: `${pageSettings.width}mm ${pageSettings.height}mm`,
        "page-orientation": "upright",
      },
      body: {
        // zoom: 1,
        "font-size": `${pageSettings.fontSize}mm`,
        "line-height": `${pageSettings.lineHeight}mm`,
        // margin: `${pageSettings.margin}mm`,
      },
    };

    const formmatedObj = `@media print {
      @page ${JSON.stringify(stylesObj.page)}
      body ${JSON.stringify(stylesObj.body)}
    }
    `;

    return formmatedObj.replaceAll(",", "; ").replaceAll(`"`, "");
  };

  const handlePrint = useReactToPrint({
    ...printOptions,
    contentRef: printRef,
    documentTitle: "Etiqueta test",
    pageStyle: getPrintStyles(),
  });

  const handlePageSettingsChange = (
    field: keyof EditorPageSettings,
    value: number
  ) => {
    if (isNaN(value)) return;

    setPageSettings({
      ...pageSettings,
      [field]: value,
    });
  };

  return (
    <EditorContext.Provider
      value={{
        zoom,
        pageSettings,
        printRef,
        onPrint: handlePrint,
        editionMode,
        printOptions,
        onChangePrintOptions: setPrintOptions,
        onChangeEditionMode,
        onZoomIn: handleZoomIn,
        onZoonOut: handleZoomOut,
        onChangePageSetting: handlePageSettingsChange,
      }}
    >
      {children}
    </EditorContext.Provider>
  );
};

export const useEditor = () => {
  const context = useContext(EditorContext);
  if (!context) {
    throw new Error("useEditor must be used within an EditorProvider");
  }
  return context;
};
