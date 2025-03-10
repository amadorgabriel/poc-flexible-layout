import satori from "satori";
import { Resvg } from "@resvg/resvg-js";
import fs from "fs";
import path from "path";
import { NextResponse } from "next/server";
import { Test2 } from "@/presentation/components/Other/Label/HtmlLabel/Test2";
import sharp from "sharp";

export async function GET() {
  try {
    const fontPath = path.join(
      process.cwd(),
      "public",
      "fonts",
      "Roboto-Medium.ttf"
    );
    const fontData = fs.readFileSync(fontPath);

    const svg = await satori(<Test2 width={374} height={204} />, {
      width: 374,
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

    const pngBuffer = await sharp(Buffer.from(svg)).png().toBuffer();

    return new NextResponse(pngBuffer, {
      headers: {
        "Content-Type": "image/png",
        "Content-Disposition": 'attachment; filename="output.png"',
      },
    });
  } catch (error) {
    console.error("Erro ao gerar PNG:", error);
    return new NextResponse(JSON.stringify({ error: "Erro ao gerar PNG" }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}
