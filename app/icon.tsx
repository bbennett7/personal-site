import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { ImageResponse } from 'next/og';
import { ICON_BG, ICON_FG, ICON_FONT_NAME, ICON_FONT_PATH } from './_icon-shared';

export const dynamic = 'force-static';
export const runtime = 'nodejs';
export const size = { width: 32, height: 32 };
export const contentType = 'image/png';

export default function Icon() {
  const fontData = readFileSync(join(process.cwd(), ICON_FONT_PATH));
  return new ImageResponse(
    <div
      style={{
        width: '100%',
        height: '100%',
        background: ICON_BG,
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <span
        style={{
          fontFamily: ICON_FONT_NAME,
          fontSize: 26,
          color: ICON_FG,
          lineHeight: 1,
          transform: 'translateY(1px)',
        }}
      >
        B
      </span>
    </div>,
    {
      ...size,
      fonts: [{ name: ICON_FONT_NAME, data: fontData, style: 'normal' }],
    },
  );
}
