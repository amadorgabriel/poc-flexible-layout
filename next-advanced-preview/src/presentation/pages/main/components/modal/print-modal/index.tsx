import { useState, useEffect } from "react";

import { usePrint } from "@/presentation/context/PrintContext";
import { Modal } from "@/presentation/components/Feedback/Modal";
import Spinner from "@/presentation/components/Feedback/Spinner";
import { Segmented } from "@/presentation/components/DataDisplay/Segmented";
import { IFileType } from "@/presentation/context/PrintContext/index.types";
import { HTMLLabelPreview } from "@/presentation/components/Other/Label/Preview/Html";
import { ModalProps } from "@/presentation/components/Feedback/Modal/index.types";

import { getPreviewElement, renderOptions } from "./index.const";

const width = 374;
const height = 204;

export default function PrintModal({
  open = false,
  onClose,
  onOpen,
}: Omit<ModalProps, "children">) {
  const [currRenderOptions, setCurrRenderOptions] = useState<IFileType>("html");

  const [pngURL, setPngURL] = useState<string | null>(null);
  const [pdfURL, setPdfURL] = useState<string | null>(null);
  const [svgURL, setSvgURL] = useState<string | null>(null);
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

  const handlePrint = onPrint;

  const fetchPNG = async () => {
    if (pngURL) {
      setFetchMessage(`[PNG] foi gerado com sucesso.`);
      return;
    }

    setIsFetching(true);

    try {
      const response = await fetch("/api/generate-png");

      const clonedResponse = response.clone();

      if (!clonedResponse.ok) {
        throw new Error("Erro ao buscar o arquivo");
      }

      const blob = await clonedResponse.blob();
      const url = URL.createObjectURL(blob);

      setPngURL(url);
      setFileResponse(response);

      setFetchMessage(`[PNG] foi gerado com sucesso.`);
    } catch (error) {
      setFetchMessage(`[PNG] apresentou problemas.`);
    } finally {
      setIsFetching(false);
    }
  };

  const handleDownloadPNG = async () => {
    if (!fileResponse) return;

    const clonedResponse = fileResponse.clone();

    const pngBlob = await clonedResponse.blob();

    await onDownloadFile({
      blob: pngBlob,
      extension: "png",
      filename: "output",
    });
  };

  const fetchSVG = async () => {
    if (svgURL) {
      setFetchMessage(`[SVG] foi gerado com sucesso.`);
      return;
    }

    setIsFetching(true);

    try {
      const response = await fetch("/api/generate-svg");

      const clonedResponse = response.clone();

      if (!clonedResponse.ok) {
        throw new Error("Erro ao buscar o arquivo");
      }

      const svg = await clonedResponse.text();

      setSvgURL(svg);
      setFileResponse(response);

      setFetchMessage(`[SVG] foi gerado com sucesso.`);
    } catch (error) {
      setFetchMessage(`[SVG] apresentou problemas.`);
    } finally {
      setIsFetching(false);
    }
  };

  const handleDownloadSVG = async () => {
    if (!fileResponse) return;

    const clonedResponse = fileResponse.clone();

    const svg = await clonedResponse.text();

    console.log("clonedResponse", clonedResponse);

    const blob = new Blob([svg], { type: "image/svg+xml" });

    await onDownloadFile({
      blob,
      extension: "svg",
      filename: "SVG_POC",
    });
  };

  const fetchPDF = async () => {
    if (pdfURL) {
      setFetchMessage(`[PDF] foi gerado com sucesso.`);
      return;
    }

    setIsFetching(true);

    try {
      const response = await fetch("/api/generate-pdf");

      const clonedResponse = response.clone();

      if (!clonedResponse.ok) {
        throw new Error("Erro ao buscar o arquivo");
      }

      const blob = await clonedResponse.blob();
      const url = URL.createObjectURL(blob);

      setPdfURL(url);
      setFileResponse(response);

      setFetchMessage(`[PDF] foi gerado com sucesso.`);
    } catch (error) {
      setFetchMessage(`[PDF] apresentou problemas.`);
    } finally {
      setIsFetching(false);
    }
  };

  const handleDownloadPdf = async () => {
    if (!fileResponse) return;

    const clonedResponse = fileResponse.clone();

    const pdfBlob = await clonedResponse.blob();

    await onDownloadFile({
      blob: pdfBlob,
      extension: "pdf",
      filename: "output",
    });
  };

  const previewElement = getPreviewElement({
    extension: currRenderOptions,
    options: {
      html: {
        onClick: handlePrint,
        preview: <HTMLLabelPreview width={width} height={height} />,
      },
      png: {
        onClick: handleDownloadPNG,
        preview: pngURL && (
          <img src={pngURL} width={width} height={height} alt="Preview" />
        ),
      },
      pdf: {
        onClick: handleDownloadPdf,
        preview: pdfURL && (
          <iframe
            key="pdf"
            src={pdfURL}
            className="w-full h-[500px] flex justify-center items-center"
          />
        ),
      },
      zpl: {
        onClick: () => {},
        preview: <p>Preview ZPL</p>,
      },
      svg: {
        onClick: handleDownloadSVG,
        preview: svgURL && (
          <div
            className="result-container"
            dangerouslySetInnerHTML={{
              __html: svgURL,
            }}
          />
        ),
      },
      bmp: {
        onClick: () => {},
        preview: <p>Preview Bitmap</p>,
      },
    },
  });

  useEffect(() => {
    const fetchFile = async () => {
      switch (currRenderOptions) {
        case "html":
          setFetchMessage(`[HTML] foi gerado com sucesso.`);
          break;

        case "png":
          await fetchPNG();
          break;

        case "svg":
          await fetchSVG();
          break;

        case "pdf":
          await fetchPDF();
          break;

        case "zpl":
          setFetchMessage(`[ZPL] apresentou problemas.`);
          break;

        case "bmp":
          setFetchMessage(`[BMP] apresentou problemas.`);
          break;

        default:
          break;
      }
    };

    fetchFile();

    return () => {
      setFileResponse(null);
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

          <div
            className={`relative flex justify-center items-center border border-slate-600 min-h-[500px] rounded-md paper-grid`}
          >
            <div
              ref={printRef}
              className={`${currRenderOptions === "pdf" && "w-full"}`}
            >
              {isFetching ? (
                <Spinner size="small" />
              ) : (
                <div className="flex justify-center items-center h-full w-full">
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
