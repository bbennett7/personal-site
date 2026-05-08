import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { ImageResponse } from 'next/og';

export const runtime = 'nodejs';
export const size = { width: 32, height: 32 };
export const contentType = 'image/png';

const fontData = readFileSync(join(process.cwd(), 'fonts/PsychedelicPeace-subset.woff2'));

export default function Icon() {
  return new ImageResponse(
    <div
      style={{
        width: '100%',
        height: '100%',
        background: '#5b5119',
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <span
        style={{
          fontFamily: 'PsychedelicPeace',
          fontSize: 26,
          color: '#d4a440',
          lineHeight: 1,
          transform: 'translateY(1px)',
        }}
      >
        B
      </span>
    </div>,
    {
      ...size,
      fonts: [{ name: 'PsychedelicPeace', data: fontData, style: 'normal' }],
    },
  );
}
