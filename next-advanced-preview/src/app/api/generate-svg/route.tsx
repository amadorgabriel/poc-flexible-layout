import satori from "satori";
import fs from "fs";
import path from "path";
import { NextResponse } from "next/server";
import { Test2 } from "@/presentation/components/Label/HtmlLabel/Test2";

// Exportação nomeada para o método GET
export async function GET() {
  try {
    // Caminho para a fonte (ajuste conforme necessário)
    const fontPath = path.join(
      process.cwd(),
      "public",
      "fonts",
      "Roboto-Medium.ttf"
    );
    const fontData = fs.readFileSync(fontPath);

    // Renderize o componente para SVG
    const svg = await satori(<Test2 width={378} height={204} />, {
      width: 378,
      height: 204,
      fonts: [
        {
          name: "Roboto",
          data: fontData,
          weight: 500,
          style: "normal",
        },
      ],
    });

    // Retorne o SVG como resposta
    return new NextResponse(svg, {
      headers: {
        "Content-Type": "image/svg+xml",
      },
    });
  } catch (error) {
    console.error("Erro ao gerar SVG:", error);
    return new NextResponse(JSON.stringify({ error: "Erro ao gerar SVG" }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}
