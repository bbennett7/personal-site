import type { Metadata, Viewport } from 'next';
import { Bitter, IBM_Plex_Mono, Sulphur_Point } from 'next/font/google';
import localFont from 'next/font/local';
import { Footer } from '@/components/Footer';
import { Nav } from '@/components/Nav';
import { ScrollToTop } from '@/components/ScrollToTop';
import './globals.css';

const psychedelic = localFont({
  src: '../fonts/PsychedelicPeace-subset.woff2',
  variable: '--font-wordmark',
  display: 'swap',
  preload: true,
});

const sulphur = Sulphur_Point({
  weight: ['300', '400', '700'],
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
});

const bitter = Bitter({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
});

const plexMono = IBM_Plex_Mono({
  weight: ['400', '500'],
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Bryn Bennett · Senior fullstack engineer',
  description: 'Senior fullstack engineer in Los Angeles, building AI-driven product systems.',
  metadataBase: new URL('https://brynbennett.dev'),
  openGraph: {
    title: 'Bryn Bennett · Senior fullstack engineer',
    description: 'Senior fullstack engineer in Los Angeles, building AI-driven product systems.',
    url: 'https://brynbennett.dev',
    siteName: 'Bryn Bennett',
    locale: 'en_US',
    type: 'website',
  },
};

export const viewport: Viewport = {
  themeColor: '#d4a440',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${psychedelic.variable} ${sulphur.variable} ${bitter.variable} ${plexMono.variable}`}
    >
      <body>
        <ScrollToTop />
        <div className="container">
          <Nav />
          <main>{children}</main>
        </div>
        <Footer />
      </body>
    </html>
  );
}
