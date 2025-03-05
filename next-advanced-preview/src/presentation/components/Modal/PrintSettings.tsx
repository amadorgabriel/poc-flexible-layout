import { useMemo } from "react";

import { X } from "lucide-react";

import { useEditor } from "@/presentation/context/EditorContext";

import { BasicLabel } from "../Label/Basic";

interface PrintSettingsModalProps {
  open: boolean;
  onChangeVisibility: (value: boolean) => void;
}

export default function PrintSettingsModal({
  open = false,
  onChangeVisibility,
}: PrintSettingsModalProps) {
  const {
    pages,
    printRef,
    pageSettings,
    printSettings,
    onPrint,
    onChangePrintSettings,
  } = useEditor();

  const handleChangeVisibility = (value: boolean) => {
    onChangeVisibility(value);
  };

  const handlePrint = () => {
    try {
      onPrint();
    } catch (e) {
      throw new Error("Erro while printing");
    } finally {
      // onChangeVisibility(false);
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
    open && (
      <div className="fixed inset-0 flex items-center justify-center bg-[#4747478e] ">
        <div className="bg-white p-6 rounded-md shadow-lg w-[800px] border border-slate-800 space-y-4">
          <header className="flex justify-between">
            <div>
              <h2 className="font-normal">Configurações de impressão</h2>
              <small className="text-gray-600 mb-4">
                Defina o nº de colunas para impressão.
              </small>
            </div>

            <button
              className="cursor-pointer rounded-sm hover:bg-slate-200 w-7 h-7 flex justify-center items-center p-1"
              onClick={() => onChangeVisibility(false)}
            >
              <X className="text-slate-600" />
            </button>
          </header>

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
              <div className="flex justify-center items-center py-8  border border-slate-600 rounded-md  pointer-events-none bg-slate-200">
                <div
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
                </div>
              </div>
            </div>
          </section>

          <footer className="flex w-full justify-end space-x-2">
            <button
              onClick={() => handleChangeVisibility(false)}
              className="cursor-pointer px-4 py-2 border border-red-400 text-red-400 hover:underline rounded-md"
            >
              Cancelar
            </button>
            <button
              onClick={handlePrint}
              className="cursor-pointer px-4 py-2 border border-black text-black hover:underline rounded-md"
            >
              Imprimir
            </button>
          </footer>
        </div>
      </div>
    )
  );
}
