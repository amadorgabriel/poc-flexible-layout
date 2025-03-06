import { useMemo } from "react";

import { useEditor } from "@/presentation/context/EditorContext";

import { Modal } from "@/presentation/components/Modal";
import { BasicLabel } from "@/presentation/components/Label/Basic";
import { ModalProps } from "@/presentation/components/Modal/index.types";
import { Test2 } from "@/presentation/components/Label/HtmlLabel/Test2";

export default function PrintModal({
  open = false,
  onClose,
  onOpen,
}: Omit<ModalProps, "children">) {
  const {
    pages,
    printRef,
    pageSettings,
    printSettings,
    onPrint,
    onChangePrintSettings,
  } = useEditor();

  const handlePrint = () => {
    try {
      onPrint();
    } catch (e) {
      throw new Error("Erro while printing");
    } finally {
    }
  };

  const handleDownloadPdf = async () => {
    try {
      const response = await fetch("/api/generate-pdf");
      const pdfBlob = await response.blob();

      const url = URL.createObjectURL(pdfBlob);
      const link = document.createElement("a");
      link.href = url;
      link.download = "output.pdf"; 

      document.body.appendChild(link);
      link.click();

      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Erro ao baixar o PDF:", error);
    }
  };

  const handleDownloadPNG = async () => {
    try {
      const response = await fetch("/api/generate-png");
      const pngBlob = await response.blob();

      const url = URL.createObjectURL(pngBlob);
      const link = document.createElement("a");
      link.href = url;
      link.download = "output.png"; 

      document.body.appendChild(link);
      link.click();

      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Erro ao baixar o PNG:", error);
    }
  };

  const handleDownloadSVG = async () => {
    try {
      const response = await fetch("/api/generate-svg");
      const svg = await response.text();

      const blob = new Blob([svg], { type: "image/svg+xml" });

      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = "output.svg"; // Nome do arquivo para download

      document.body.appendChild(link);
      link.click();

      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Erro ao baixar o SVG:", error);
    }
  };

  const memoizedPreview = useMemo(() => {
    return Array.from({ length: printSettings.columnAmount }).map(
      (_, index) => (
        <BasicLabel
          printing={true}
          key={index}
          id={pages[0].id}
          settings={pageSettings}
          items={pages[0].items}
        />
      )
    );
  }, [printSettings]);

  return (
    <Modal open={open} onClose={onClose} onOpen={onOpen}>
      <Modal.Title title="Configurações de impressão" />

      <section>
        <div className="grid grid-cols-3 gap-4 mb-5">
          <div>
            <label className="block text-xs text-gray-600 mb-1">
              Nº Colunas
            </label>

            <select
              name="colAmount"
              id="colAmount"
              value={printSettings.columnAmount}
              className="w-full px-2 py-1 text-sm border rounded"
              onChange={(e) =>
                onChangePrintSettings(
                  "columnAmount",
                  e.target.value as unknown as number
                )
              }
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
          </div>

          <div>
            <label className="block text-xs text-gray-600 mb-1">
              Largura do ribbon (mm)
            </label>

            <input
              name="ribbonWidth"
              id="ribbonWidth"
              type="number"
              min={0}
              value={printSettings.ribbonWidth}
              className="w-full px-2 py-1 text-sm border rounded"
              onChange={(e) =>
                onChangePrintSettings(
                  "ribbonWidth",
                  e.target.value as unknown as number
                )
              }
            />
          </div>

          <div>
            <label className="block text-xs text-gray-600 mb-1">
              Altura do ribbon (mm)
            </label>

            <input
              name="ribbonHeight"
              id="ribbonHeight"
              type="number"
              min={0}
              value={printSettings.ribbonHeight}
              className="w-full px-2 py-1 text-sm border rounded"
              onChange={(e) =>
                onChangePrintSettings(
                  "ribbonHeight",
                  e.target.value as unknown as number
                )
              }
            />
          </div>
        </div>

        <div>
          <h3 className="text-sm mb-2">Preview</h3>
          <div className="flex justify-center items-center py-8  border border-slate-600 rounded-md paper-grid ">
            {<Test2 />}
            {/* <div
              ref={printRef}
              className="grid bg-white overflow-hidden"
              style={{
                width: `${printSettings.ribbonWidth}mm`,
                maxWidth: `${printSettings.ribbonWidth}mm`,
                height: `${printSettings.ribbonHeight}mm`,
                gridTemplateColumns: `repeat(${printSettings.columnAmount}, 1fr)`,
              }}
            >
              {memoizedPreview}
            </div> */}
          </div>
        </div>
      </section>

      <Modal.Footer
        otherButtons={[
          {
            onClick: () => {},
            className:
              "cursor-pointer px-4 py-2 border border-black text-black hover:underline rounded-md",
            children: "Baixar ZPL",
          },
          {
            onClick: () => {},
            className:
              "cursor-pointer px-4 py-2 border border-black text-black hover:underline rounded-md",
            children: "Baixar BMP",
          },
          {
            onClick: handleDownloadPdf,
            className:
              "cursor-pointer px-4 py-2 border border-black text-black hover:underline rounded-md",
            children: "Baixar PDF",
          },
          {
            onClick: handleDownloadPNG,
            className:
              "cursor-pointer px-4 py-2 border border-black text-black hover:underline rounded-md",
            children: "Baixar PNG",
          },
          {
            onClick: handleDownloadSVG,
            className:
              "cursor-pointer px-4 py-2 border border-black text-black hover:underline rounded-md",
            children: "Baixar SVG",
          },
        ]}
        okButton={{
          onClick: handlePrint,
          className:
            "cursor-pointer px-4 py-2 border border-black text-black hover:underline rounded-md",
          children: "Imprimir",
        }}
      ></Modal.Footer>
    </Modal>
  );
}
