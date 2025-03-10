import fs from "fs";
import path from "path";
import sharp from "sharp";
import satori from "satori";

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

    const svg = await satori(<HTMLLabelPreview width={374} height={204} />, {
      width: 374,
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

    const pngBuffer = await sharp(Buffer.from(svg)).png().toBuffer();

    return new NextResponse(pngBuffer, {
      headers: {
        "Content-Type": "image/png",
        "Content-Disposition": 'attachment; filename="output.png"',
      },
    });
  } catch (error) {
    return new NextResponse(JSON.stringify({ error: "Erro ao gerar PNG" }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}
