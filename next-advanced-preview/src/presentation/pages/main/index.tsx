import { Canvas } from "@/presentation/components/Canvas";
import { EditorProvider } from "@/presentation/context/EditorContext";

export const MainPage = () => {
  return (
    <EditorProvider initialMode="basic" initialZoom={100}>
      <main className="h-screen">
        <Canvas />
      </main>
    </EditorProvider>
  );
};
