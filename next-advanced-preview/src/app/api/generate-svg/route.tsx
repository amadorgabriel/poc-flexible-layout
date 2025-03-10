import satori from "satori";
import fs from "fs";
import path from "path";
import { NextResponse } from "next/server";
import { Test2 } from "@/presentation/components/Other/Label/HtmlLabel/Test2";

export async function GET() {
  try {
    const fontPath = path.join(
      process.cwd(),
      "public",
      "fonts",
      "Roboto-Medium.ttf"
    );
    const fontData = fs.readFileSync(fontPath);

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
