import fs from "fs";
import path from "path";
import sharp from "sharp";
import satori from "satori";

import { NextResponse } from "next/server";
import { HTMLLabelPreview } from "@/presentation/components/Other/Label/Preview/Html";

export async function GET() {
  const width = 374;
  const height = 204;

  try {
    const fontPath = path.join(
      process.cwd(),
      "public",
      "fonts",
      "Arial-Normal.ttf"
    );
    const fontData = fs.readFileSync(fontPath);

    const svg = await satori(
      <HTMLLabelPreview width={width} height={height} />,
      {
        width: width,
        height: height,
        fonts: [
          {
            name: "Arial",
            data: fontData,
            weight: 400,
            style: "normal",
          },
        ],
      }
    );

    const pngBuffer = await sharp(Buffer.from(svg))
      .resize(width * 2, height * 2)
      .grayscale()
      .modulate({
        saturation: 0, // Remove a saturação (garante preto e branco)
      })
      .sharpen({
        sigma: 1.2, // Raio do efeito de nitidez
        m1: 1000000, // Nitidez em áreas planas
        m2: 1000000, // Nitidez em áreas irregulares
        x1: 0, // Limiar entre áreas planas e irregulares
        y2: 0, // Clareamento máximo
        y3: 1000000, // Escurecimento máximo
      })
      .png({
        quality: 100,
        compressionLevel: 9,
      })
      .withMetadata({
        density: 300, // DPI
      })
      .toBuffer();

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
