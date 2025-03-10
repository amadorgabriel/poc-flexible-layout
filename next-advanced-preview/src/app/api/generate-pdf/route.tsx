import fs from "fs";
import path from "path";
import satori from "satori";
import PDFDocument from "pdfkit";
import blobStream from "blob-stream";

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

    const svg = await satori(
      <Test2 width={374} height={204} />, 
      {
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
      }
    );

    // Crie um documento PDF
    const doc = new PDFDocument({ size: [374, 204] }); // Tamanho da página em pixels
    const stream = doc.pipe(blobStream());

    // Adicione o SVG ao PDF
    doc.image(Buffer.from(svg), 0, 0, { width: 374, height: 204 });

    // Finalize o PDF
    doc.end();

    // Retorne o PDF como resposta
    const pdfBuffer = await new Promise<Buffer>((resolve) => {
      stream.on("finish", async () => {
        const buffer = stream.toBlob();
        resolve(buffer as any);

        // const blob = stream.toBlob(); // Obtém o Blob
        // const arrayBuffer = await blob.arrayBuffer(); // Converte o Blob em ArrayBuffer
        // const buffer = Buffer.from(arrayBuffer); // Converte o ArrayBuffer em Buffer
        // resolve(buffer);
      });
    });

    return new NextResponse(pdfBuffer, {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": 'attachment; filename="output.pdf"', // Força o download
      },
    });
  } catch (error) {
    console.error("Erro ao gerar PDF:", error);
    return new NextResponse(JSON.stringify({ error: "Erro ao gerar PDF" }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}
