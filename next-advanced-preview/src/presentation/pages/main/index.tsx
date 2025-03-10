import { Canvas } from "@/presentation/components/DataDisplay/Canvas";
import { EditorProvider } from "@/presentation/context/EditorContext";
import { PrintProvider } from "@/presentation/context/PrintContext";

export const MainPage = () => {
  return (
    <EditorProvider initialMode="basic" initialZoom={100}>
      <PrintProvider>
        <main className="h-screen">
          <Canvas />
        </main>
      </PrintProvider>
    </EditorProvider>
  );
};
