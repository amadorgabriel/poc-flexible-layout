import { useState } from "react";

import { Printer } from "lucide-react";

import { FloatingMenu } from "@/presentation/components/DataDisplay/FloatingMenu";
import PrintModal from "../modal/PrintModal";

export const PrintMenu = () => {
  const [printModalOpen, setPrintModalOpen] = useState(false);

  return (
    <FloatingMenu className="bottom-4 left-4" variant="transparent">
      <button
        onClick={() => setPrintModalOpen(true)}
        className="py-2 px-4 flex border border-slate-800 cursor-pointer bg-white rounded-sm shadow-lg hover:bg-gray-200"
      >
        <Printer className="w-5 h-5 mr-2" />
        Imprimir
      </button>

      <PrintModal
        open={printModalOpen}
        onClose={() => setPrintModalOpen(false)}
        onOpen={() => setPrintModalOpen(true)}
      />
    </FloatingMenu>
  );
};
