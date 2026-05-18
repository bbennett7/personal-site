import type { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: 'https://brynbennett.dev' },
    { url: 'https://brynbennett.dev/about' },
    { url: 'https://brynbennett.dev/work' },
    { url: 'https://brynbennett.dev/portfolio' },
    { url: 'https://brynbennett.dev/contact' },
  ];
}
