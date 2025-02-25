import { Settings } from "lucide-react";

import { useEditor } from "@/presentation/context/EditorContext";

export const ConfigurationMenu = () => {
  const { editionMode, onChangeEditionMode } = useEditor();

  return (
    <aside className="border border-slate-600 p-4 rounded-md bg-white space-y-2 h-full w-[300px]">
      <h3 className="text-sm font-medium flex items-center">
        <Settings className="mr-2" size={14} />
        Configurações:
      </h3>

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
                onChange={(e) =>
                  onChangeEditionMode(e.target.checked ? "basic" : "advanced")
                }
              />
              <label className="text-xs text-gray-600" htmlFor="basic">
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
                onChange={(e) =>
                  onChangeEditionMode(e.target.checked ? "advanced" : "basic")
                }
              />
              <label className="text-xs text-gray-600" htmlFor="advanced">
                Avançado
              </label>
            </div>
          </fieldset>
        </form>
      </section>
    </aside>
  );
};
