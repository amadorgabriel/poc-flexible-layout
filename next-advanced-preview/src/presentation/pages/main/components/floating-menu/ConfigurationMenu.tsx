import { Settings } from "lucide-react";

import { useEditor } from "@/presentation/context/EditorContext";
import { FloatingMenu } from "@/presentation/components/DataDisplay/FloatingMenu";
import EditionModal from "../modal/edition-modal/inde";
import { useState } from "react";

export const ConfigurationMenu = () => {
  const { editionMode, onChangeEditionMode } = useEditor();

  const [editionModalOpen, setEditionModalOpen] = useState(false);

  return (
    <FloatingMenu className="top-4 right-4">
      <FloatingMenu.Title title="Configurações" icon={<Settings size={14} />} />

      <section>
        <h4 className="block text-xs text-gray-600 mb-1">Modo de edição:</h4>

        <form className="flex flex-col items-start">
          <fieldset id="mode">
            <div className="flex items-center space-x-1">
              <input
                type="radio"
                name="mode"
                id="basic"
                value="basic"
                checked={editionMode === "basic"}
                disabled={editionMode === "advanced"}
                onChange={() => {}}
              />
              <label className={`text-xs text-gray-600 ${editionMode === "advanced" && 'cursor-not-allowed opacity-50'}`} htmlFor="basic">
                Básico
              </label>
            </div>

            <div className="space-x-1">
              <input
                type="radio"
                name="mode"
                id="advanced"
                checked={editionMode === "advanced"}
                value="advanced"
                onChange={() => setEditionModalOpen(true)}
              />
              <label className="text-xs text-gray-600" htmlFor="advanced">
                Avançado
              </label>
            </div>
          </fieldset>
        </form>
      </section>

      <EditionModal
        open={editionModalOpen}
        onClose={() => setEditionModalOpen(false)}
        onOpen={() => setEditionModalOpen(true)}
      />
    </FloatingMenu>
  );
};
