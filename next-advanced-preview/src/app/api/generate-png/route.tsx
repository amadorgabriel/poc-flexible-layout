import satori from 'satori';
import { Resvg } from '@resvg/resvg-js';
import fs from 'fs';
import path from 'path';
import { NextResponse } from 'next/server';
import { Test2 } from '@/presentation/components/Label/HtmlLabel/Test2';

export async function GET() {
  try {
    // Caminho para a fonte Roboto-Medium.ttf
    const fontPath = path.join(process.cwd(), 'public', 'fonts', 'Roboto-Medium.ttf');
    const fontData = fs.readFileSync(fontPath);

    // Renderize o componente para SVG
    const svg = await satori(
      <Test2 width={374} height={204} />, // Passe as props necessárias
      {
        width: 374, // Largura do SVG
        height: 204, // Altura do SVG
        fonts: [
          {
            name: 'Roboto', // Nome da fonte
            data: fontData,
            weight: 500, // Peso da fonte (Medium corresponde a 500)
            style: 'normal',
          },
        ],
      }
    );

    // Converta o SVG em PNG
    const resvg = new Resvg(svg, {
      fitTo: {
        mode: 'width', // Ajuste o PNG para a largura do SVG
        value: 374, // Largura do PNG
      },
    });
    const pngData = resvg.render();
    const pngBuffer = pngData.asPng();

    // Retorne o PNG como resposta
    return new NextResponse(pngBuffer, {
      headers: {
        'Content-Type': 'image/png',
        'Content-Disposition': 'attachment; filename="output.png"', // Força o download
      },
    });
  } catch (error) {
    console.error('Erro ao gerar PNG:', error);
    return new NextResponse(JSON.stringify({ error: 'Erro ao gerar PNG' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}