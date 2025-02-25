import { useEditor } from "@/presentation/context/EditorContext";

interface PrintSettingsModalProps {
  open: boolean;
  onChangeVisibility: (value: boolean) => void;
}

export default function PrintSettingsModal({
  open = false,
  onChangeVisibility,
}: PrintSettingsModalProps) {
  const { onPrint, onChangePrintOptions } = useEditor();

  const handleChangeVisibility = (value: boolean) => {
    onChangeVisibility(value);
  };

  const handlePrint = () => {
    try {
      onChangePrintOptions({
        onAfterPrint: () => onChangeVisibility(false),
      });

      onPrint();
    } catch (e) {
      throw new Error("Erro while printing");
    }
  };

  return (
    open && (
      <div className="fixed inset-0 flex items-center justify-center">
        <div className="bg-white p-6 rounded-lg shadow-lg w-96">
          <h2 className="font-normal mb-4">Configurações de impressão</h2>
          <p className="text-gray-600 mb-4">This is a simple modal.</p>

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
