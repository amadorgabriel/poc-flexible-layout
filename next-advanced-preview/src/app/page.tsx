"use client";

import { Canvas } from "@/presentation/components/Canvas";
import { EditorProvider } from "@/presentation/context/EditorContext";

export default function Home() {
  return (
    <EditorProvider initialMode="advanced">
      <main className="h-screen">
        <Canvas />
      </main>
    </EditorProvider>
  );
}
