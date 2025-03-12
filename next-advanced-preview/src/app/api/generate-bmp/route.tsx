import fs from "fs";
import path from "path";
import satori from "satori";

import { NextResponse } from "next/server";
import { HTMLLabelPreview } from "@/presentation/components/Other/Label/Preview/Html";
import { Jimp } from "jimp";
import sharp from "sharp";

export async function GET() {
  const width = 374 * 6;
  const height = 204 * 6;

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
      .resize(width * 6, height * 6)
      .grayscale()
      .modulate({
        saturation: 0, // Remove a saturação (garante preto e branco)
      })
      .png({
        quality: 100,
        compressionLevel: 1,
      })
      .withMetadata({
        density: 300, // DPI
      })
      .toBuffer();

    const svgImage = await Jimp.read(pngBuffer);

    const image = new Jimp({
      height: height,
      width: width,
      color: 0xffffffff,
    });

    svgImage.resize({ w: width * 6, h: height * 6 });

    image.composite(svgImage, 0, 0);

    image
      .greyscale() // Converte para escala de cinza
      .contrast(1) // Aumenta o contraste
      .dither(); // Aplica dithering para simular monocromático

    const bmpBuffer = await image.getBuffer("image/bmp");

    return new NextResponse(bmpBuffer, {
      headers: {
        "Content-Type": "image/bmp",
        "Content-Disposition": 'attachment; filename="output.bmp"',
      },
    });
  } catch (error) {
    return new NextResponse(JSON.stringify({ error: "Erro ao gerar BMP" }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}
