import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { ImageResponse } from 'next/og';

export const runtime = 'nodejs';
export const dynamic = 'force-static';
export const alt = 'Bryn Bennett · Senior fullstack engineer';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

const BG = '#5B5119';
const OCHRE = '#D4A440';
const PAPER = '#FAFAF6';

async function loadGoogleFont(family: string, weight: number): Promise<ArrayBuffer> {
  const css = await fetch(
    `https://fonts.googleapis.com/css2?family=${family.replace(/ /g, '+')}:wght@${weight}`,
    {
      headers: {
        'User-Agent':
          'Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10_6_8; de-at) AppleWebKit/533.21.1 (KHTML, like Gecko) Version/5.0.5 Safari/533.21.1',
      },
    },
  ).then((r) => r.text());

  const fontUrl = css.match(/url\(([^)]+)\)/)?.[1];
  if (!fontUrl) throw new Error(`Failed to load font: ${family}`);
  return fetch(fontUrl).then((r) => r.arrayBuffer());
}

export default async function OGImage() {
  const psychedelicFont = readFileSync(join(process.cwd(), 'fonts/PsychedelicPeace.ttf'));
  const [sulphurFont, plexFont] = await Promise.all([
    loadGoogleFont('Sulphur Point', 700),
    loadGoogleFont('IBM Plex Mono', 400),
  ]);

  return new ImageResponse(
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: BG,
      }}
    >
      <div style={{ width: '100%', height: 4, backgroundColor: OCHRE }} />

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          flex: 1,
          padding: '0 80px',
        }}
      >
        <div
          style={{
            fontFamily: 'IBM Plex Mono',
            fontSize: 18,
            color: OCHRE,
            textTransform: 'uppercase' as const,
            letterSpacing: '0.25em',
            marginBottom: 32,
          }}
        >
          {'// Portfolio'}
        </div>

        <div
          style={{
            fontFamily: 'PsychedelicPeace',
            fontSize: 96,
            color: OCHRE,
            lineHeight: 1.1,
            marginBottom: 16,
          }}
        >
          Bryn Bennett
        </div>

        <div
          style={{
            fontFamily: 'Sulphur Point',
            fontSize: 32,
            fontWeight: 700,
            color: PAPER,
          }}
        >
          Senior fullstack engineer.
        </div>
      </div>

      <div style={{ padding: '0 80px 48px', display: 'flex' }}>
        <div
          style={{
            fontFamily: 'IBM Plex Mono',
            fontSize: 16,
            textTransform: 'uppercase' as const,
            letterSpacing: '0.2em',
            color: 'rgba(250, 250, 246, 0.4)',
          }}
        >
          brynbennett.dev
        </div>
      </div>
    </div>,
    {
      ...size,
      fonts: [
        { name: 'PsychedelicPeace', data: psychedelicFont, style: 'normal' as const },
        {
          name: 'Sulphur Point',
          data: sulphurFont,
          style: 'normal' as const,
          weight: 700 as const,
        },
        { name: 'IBM Plex Mono', data: plexFont, style: 'normal' as const, weight: 400 as const },
      ],
    },
  );
}
