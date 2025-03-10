import { useState, useEffect } from "react";

import { usePrint } from "@/presentation/context/PrintContext";
import { Modal } from "@/presentation/components/Feedback/Modal";
import Spinner from "@/presentation/components/Feedback/Spinner";
import { Segmented } from "@/presentation/components/DataDisplay/Segmented";
import { IFileType } from "@/presentation/context/PrintContext/index.types";
import { HTMLLabelPreview } from "@/presentation/components/Other/Label/Preview/Html";
import { ModalProps } from "@/presentation/components/Feedback/Modal/index.types";

import { getPreviewElement, renderOptions } from "./index.const";

export default function PrintModal({
  open = false,
  onClose,
  onOpen,
}: Omit<ModalProps, "children">) {
  const [currRenderOptions, setCurrRenderOptions] = useState<IFileType>("html");
  const [objectURL, setObjetcURL] = useState<string | null>(null);
  const [isFetching, setIsFetching] = useState<boolean>(false);
  const [fileResponse, setFileResponse] = useState<Response | null>(null);
  const [fetchMessage, setFetchMessage] = useState<string>("");

  const {
    printRef,
    printSettings,
    onPrint,
    onChangePrintSettings,
    onDownloadFile,
  } = usePrint();

  const handlePrint = () => {
    try {
      onPrint();
    } catch (e) {
      throw new Error("Erro ao imprimir");
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

      setObjetcURL(url);
    } catch (error) {
      console.error("Erro ao baixar o PDF:", error);
    }
  };

  const handleDownloadPNG = async () => {
    if (!fileResponse) return;

    const pngBlob = await fileResponse.blob();

    await onDownloadFile({
      blob: pngBlob,
      extension: "png",
      filename: "output",
    });
  };

  const handleDownloadSVG = async () => {
    if (!fileResponse) return;

    const svg = await fileResponse.text();

    const blob = new Blob([svg], { type: "image/svg+xml" });

    await onDownloadFile({
      blob,
      extension: "svg",
      filename: "output",
    });
  };

  const previewElement = getPreviewElement({
    extension: currRenderOptions,
    options: {
      html: {
        onClick: handlePrint,
        preview: <HTMLLabelPreview />,
      },
      png: {
        onClick: handleDownloadPNG,
        preview: objectURL && <img src={objectURL} alt="Preview" />,
      },
      pdf: {
        onClick: handleDownloadPdf,
        preview: objectURL && (
          <iframe
            key="pdf"
            src={objectURL}
            style={{
              width: "100%",
              height: "500px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transform: `scale(${1})`,
            }}
          />
        ),
      },
      svg: {
        onClick: handleDownloadSVG,
        preview: objectURL && (
          <div
            className="result-container"
            dangerouslySetInnerHTML={{
              __html: objectURL,
            }}
          />
        ),
      },
      bmp: {
        onClick: () => {},
        preview: <p>Preview Bitmap</p>,
      },
      zpl: {
        onClick: () => {},
        preview: <p>Preview ZPL</p>,
      },
    },
  });

  useEffect(() => {
    if (currRenderOptions === "html") {
      setFetchMessage(`[${currRenderOptions}] foi gerado com sucesso.`);
      return;
    }

    const route = {
      svg: "generate-svg",
      png: "generate-png",
      pdf: "generate-pdf",
      bmp: "generate-bmp",
      zpl: "generate-zpl",
    }[currRenderOptions];

    const fetchFile = async () => {
      setIsFetching(true);

      try {
        const response = await fetch(`/api/${route}`);

        const clonedResponse = response.clone();

        console.log("response", response);

        if (!clonedResponse.ok) {
          throw new Error("Erro ao buscar o arquivo");
        }

        let blob: Blob;
        let url: string;

        switch (currRenderOptions) {
          case "svg":
            const svg = await clonedResponse.text();
            url = svg;
            break;

          default:
            blob = await clonedResponse.blob();
            url = URL.createObjectURL(blob);
            break;
        }

        setObjetcURL(url);
        setFileResponse(response);

        setFetchMessage(`[${currRenderOptions}] foi gerado com sucesso.`);
      } catch (error) {
        setFetchMessage(`[${currRenderOptions}] apresentou problemas.`);
      } finally {
        setIsFetching(false);
      }
    };

    fetchFile();

    return () => {
      setFileResponse(null);
      setObjetcURL(null);
      setFetchMessage("");
    };
  }, [currRenderOptions]);

  return (
    <Modal open={open} onClose={onClose} onOpen={onOpen} className="w-[950px]">
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

          <div className="relative flex justify-center items-center   border border-slate-600 rounded-md paper-grid  ">
            <div
              ref={printRef}
              style={{
                width: "100%",
                height: "500px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {isFetching ? (
                <Spinner size="small" />
              ) : (
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100%",
                    width: "100%",
                  }}
                >
                  {previewElement.preview}
                </div>
              )}
            </div>

            <span className="absolute bottom-3 right-2">
              <Segmented
                options={renderOptions}
                defaultValue={currRenderOptions}
                onChange={(opt) => {
                  setCurrRenderOptions(opt as IFileType);
                }}
              />
            </span>

            <p className="absolute bottom-2 left-2 text-sm font-light italic text-slate-600">
              {fetchMessage}
            </p>
          </div>
        </div>
      </section>

      <Modal.Footer okButton={previewElement.button}></Modal.Footer>
    </Modal>
  );
}
