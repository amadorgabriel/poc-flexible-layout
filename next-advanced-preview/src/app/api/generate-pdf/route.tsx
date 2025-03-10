import fs from "fs";
import path from "path";
import satori from "satori";
import PDFDocument from "pdfkit";
import SVGtoPDF from "svg-to-pdfkit";

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

    const doc = new PDFDocument({
      compress: false,
      size: [374, 204],
      font: fontPath,
      autoFirstPage: true,
    });

    const chunks: Buffer[] = [];
    doc.on("data", (chunk) => chunks.push(chunk));

    SVGtoPDF(doc, svg, 0, 0, {
      width: 374,
      height: 204,
      preserveAspectRatio: "xMidYMid meet",
    });

    doc.end();

    const pdfBuffer = await new Promise<Buffer>((resolve) => {
      doc.on("end", () => {
        const result = Buffer.concat(chunks);
        resolve(result);
      });
    });

    return new NextResponse(pdfBuffer, {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": 'attachment; filename="output.pdf"',
      },
    });
  } catch (error) {
    return new NextResponse(JSON.stringify({ error: "Erro ao gerar PDF" }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}
