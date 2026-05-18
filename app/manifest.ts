import type { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Bryn Bennett',
    short_name: 'Bryn',
    icons: [{ src: '/apple-icon', sizes: '180x180', type: 'image/png', purpose: 'any' }],
    theme_color: '#d4a440',
    background_color: '#ffffff',
    display: 'standalone',
  };
}
