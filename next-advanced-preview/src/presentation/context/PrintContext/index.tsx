import { createContext, useContext, useRef, useState } from "react";

import { useReactToPrint } from "react-to-print";

import { useEditor } from "../EditorContext";
import {
  IFileType,
  IPrintSettings,
  PrintContextProps,
  PrintProviderProps,
} from "./index.types";

const PrintContext = createContext<PrintContextProps | undefined>(undefined);

export const PrintProvider: React.FC<PrintProviderProps> = ({ children }) => {
  const { pageSettings } = useEditor();

  const [printSettings, setPrintSettings] = useState<IPrintSettings>({
    columnAmount: 3,
    ribbonWidth: pageSettings.width * 3,
    ribbonHeight: pageSettings.height,
  });

  const printRef = useRef<HTMLDivElement>(null);

  const getPrintStyles = (): string => {
    const stylesObj: Record<"page" | "body", any> = {
      page: {
        size: `${pageSettings.width * printSettings.columnAmount}mm ${
          pageSettings.height
        }mm`,
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
    contentRef: printRef,
    documentTitle: "Etiqueta test",
    pageStyle: getPrintStyles(),
  });

  const handleDownloadFile = async ({
    blob,
    filename,
    extension,
  }: {
    blob: Blob;
    filename: string;
    extension: IFileType;
  }) => {
    try {
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = `${filename}.${extension}`;

      document.body.appendChild(link);
      link.click();

      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    } catch (error) {
      console.error(`"Erro ao baixar o ${extension}:"`, error);
    }
  };

  const handlePrintSettingsChange = (
    field: keyof IPrintSettings,
    value: number
  ) => {
    if (isNaN(value)) return;

    setPrintSettings({
      ...printSettings,
      [field]: value,
    });
  };

  return (
    <PrintContext.Provider
      value={{
        printRef,
        onPrint: handlePrint,
        printSettings,
        onDownloadFile: handleDownloadFile,
        onChangePrintSettings: handlePrintSettingsChange,
      }}
    >
      {children}
    </PrintContext.Provider>
  );
};

export const usePrint = () => {
  const context = useContext(PrintContext);
  if (!context) {
    throw new Error("useEditor must be used within an EditorProvider");
  }
  return context;
};
