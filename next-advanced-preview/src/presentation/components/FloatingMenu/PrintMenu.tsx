import { Printer } from "lucide-react";
import { useState } from "react";
import PrintSettingsModal from "../Modal/PrintSettings";

export const PrintMenu = () => {
  const [printModalOpen, setPrintModalOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setPrintModalOpen(true)}
        className="py-2 px-4 flex border border-slate-800 cursor-pointer bg-white rounded-sm shadow-lg hover:bg-gray-200"
      >
        <Printer className="w-5 h-5 mr-2" />
        Imprimir
      </button>

      <PrintSettingsModal
        open={printModalOpen}
        onChangeVisibility={setPrintModalOpen}
      />
    </>
  );
};
