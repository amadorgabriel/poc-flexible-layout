import { useEditor } from "@/presentation/context/EditorContext";
import { useMemo } from "react";
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
    return (
      <div
        ref={printRef}
        className="flex justify-center"
        // className="h-[160px] w-[100px] rounded-sm bg-slate-200 border "
      >
        {Array.from({ length: printSettings.columnAmount }).map((_, index) => (
          <BasicLabel
            printing={true}
            key={index}
            id={pages[0].id}
            settings={pageSettings}
            items={pages[0].items}
          />
        ))}
      </div>
    );
  }, [printSettings]);

  return (
    open && (
      <div className="fixed inset-0 flex items-center justify-center">
        <div className="bg-white p-6 rounded-md shadow-lg w-[600px] space-y-4">
          <header>
            <h2 className="font-normal ">Configurações de impressão</h2>
            <small className="text-gray-600 mb-4">
              Defina o nº de colunas para impressão.
            </small>
          </header>

          <section>
            <div className="max-w-[200px] mb-5">
              <label className="block text-xs text-gray-600 mb-1">
                Nº Colunas
              </label>

              <select
                name="colAmount"
                id="colAmount"
                value={printSettings?.columnAmount}
                className="w-full px-2 py-1 text-sm border rounded"
                onChange={(e) =>
                  onChangePrintSettings({
                    columnAmount: e.target.value as unknown as number,
                  })
                }
              >
                <option disabled value="">
                  --Escolha uma opção--
                </option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
              </select>
            </div>

            <div id="print-preview">{memoizedPreview}</div>
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
