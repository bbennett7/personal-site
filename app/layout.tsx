import type { Metadata, Viewport } from 'next';
import { Bitter, IBM_Plex_Mono, Sulphur_Point } from 'next/font/google';
import localFont from 'next/font/local';
import { Footer } from '@/components/Footer';
import { Nav } from '@/components/Nav';
import { PostHogProvider } from '@/components/PostHogProvider';
import './globals.css';

const psychedelic = localFont({
  src: '../fonts/PsychedelicPeace-subset.woff2',
  variable: '--font-wordmark',
  display: 'swap',
  preload: true,
});

const sulphur = Sulphur_Point({
  weight: ['400', '700'],
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
  title: {
    default: 'Bryn Bennett · Senior fullstack engineer',
    template: '%s | Bryn Bennett',
  },
  description: 'Senior fullstack engineer in Los Angeles, building AI-driven product systems.',
  metadataBase: new URL('https://brynbennett.dev'),
  openGraph: {
    url: 'https://brynbennett.dev',
    siteName: 'Bryn Bennett',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#d4a440' },
    { media: '(prefers-color-scheme: dark)', color: '#141210' },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${psychedelic.variable} ${sulphur.variable} ${bitter.variable} ${plexMono.variable}`}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');if(t){document.documentElement.setAttribute('data-theme',t)}else if(window.matchMedia('(prefers-color-scheme:dark)').matches){document.documentElement.setAttribute('data-theme','dark')}}catch(e){}})()`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Bryn Bennett',
              jobTitle: 'Senior Fullstack Engineer',
              worksFor: { '@type': 'Organization', name: 'WellTheory' },
              url: 'https://brynbennett.dev',
              sameAs: ['https://linkedin.com/in/bryncbennett', 'https://github.com/bbennett7'],
              description:
                'Senior fullstack engineer in Los Angeles, building AI-driven product systems.',
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              name: 'Bryn Bennett',
              url: 'https://brynbennett.dev',
              description:
                'Senior fullstack engineer in Los Angeles, building AI-driven product systems.',
            }),
          }}
        />
      </head>
      <body>
        <PostHogProvider>
          <a href="#main" className="skip-link">
            Skip to main content
          </a>
          <div className="container">
            <Nav />
            <main id="main">{children}</main>
          </div>
          <Footer />
        </PostHogProvider>
      </body>
    </html>
  );
}
