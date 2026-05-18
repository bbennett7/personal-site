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

function loadFont(filename: string) {
  return readFileSync(join(process.cwd(), 'fonts', filename));
}

export default async function OGImage() {
  const psychedelicFont = loadFont('PsychedelicPeace.ttf');
  const sulphurFont = loadFont('SulphurPoint-Bold.ttf');
  const plexFont = loadFont('IBMPlexMono-Regular.ttf');

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
      <div style={{ width: '100%', height: 8, backgroundColor: OCHRE }} />

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
            fontSize: 36,
            color: OCHRE,
            textTransform: 'uppercase' as const,
            letterSpacing: '0.25em',
            marginBottom: 48,
          }}
        >
          {'// Portfolio'}
        </div>

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            marginBottom: 32,
          }}
        >
          <div
            style={{
              fontFamily: 'PsychedelicPeace',
              fontSize: 160,
              color: OCHRE,
              lineHeight: 0.85,
              letterSpacing: '0.03em',
            }}
          >
            BRYN
          </div>
          <div
            style={{
              fontFamily: 'PsychedelicPeace',
              fontSize: 160,
              color: OCHRE,
              lineHeight: 0.85,
              marginTop: '0.01em',
            }}
          >
            BENNETT
          </div>
        </div>

        <div
          style={{
            fontFamily: 'Sulphur Point',
            fontSize: 48,
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
            fontSize: 28,
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
