import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { ImageResponse } from 'next/og';

export const runtime = 'nodejs';
export const size = { width: 180, height: 180 };
export const contentType = 'image/png';

const fontData = readFileSync(join(process.cwd(), 'fonts/PsychedelicPeace-subset.woff2'));

export default function AppleIcon() {
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
          fontSize: 156,
          color: '#d4a440',
          lineHeight: 1,
          transform: 'translateY(6px)',
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
