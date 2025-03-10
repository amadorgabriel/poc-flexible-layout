import satori from "satori";
import fs from "fs";
import path from "path";
import { NextResponse } from "next/server";
import { HTMLLabelPreview } from "@/presentation/components/Other/Label/Preview/Html";

export async function GET() {
  try {
    const fontPath = path.join(
      process.cwd(),
      "public",
      "fonts",
      "Arial-Normal.ttf"
    );
    const fontData = fs.readFileSync(fontPath);

    const svg = await satori(<HTMLLabelPreview width={378} height={204} />, {
      width: 378,
      height: 204,
      fonts: [
        {
          name: "Arial",
          data: fontData,
          weight: 400,
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
    return new NextResponse(JSON.stringify({ error: "Erro ao gerar SVG" }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}
