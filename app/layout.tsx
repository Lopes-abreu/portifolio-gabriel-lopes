import type { Metadata, Viewport } from 'next';
import { IBM_Plex_Mono, IBM_Plex_Sans, IBM_Plex_Sans_Condensed } from 'next/font/google';
import { site } from '@/app/lib/site';
import './globals.css';

const plexSans = IBM_Plex_Sans({ variable: '--font-plex-sans', subsets: ['latin'], weight: ['300', '400', '500', '600'] });
const plexCondensed = IBM_Plex_Sans_Condensed({ variable: '--font-plex-condensed', subsets: ['latin'], weight: ['400', '500', '600'] });
const plexMono = IBM_Plex_Mono({ variable: '--font-plex-mono', subsets: ['latin'], weight: ['400', '500'] });

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL
  ?? (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : 'http://localhost:3000');

const title = `${site.name} — ${site.role}`;
const description = 'Portfólio de Gabriel Lopes, desenvolvedor full stack especializado em produtos digitais claros, rápidos e funcionais.';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  applicationName: site.name,
  authors: [{ name: site.name, url: siteUrl }],
  creator: site.name,
  keywords: ['Gabriel Lopes', 'desenvolvedor full stack', 'React', 'Next.js', 'TypeScript', 'portfólio'],
  alternates: { canonical: '/' },
  openGraph: {
    title,
    description,
    url: siteUrl,
    siteName: site.name,
    locale: 'pt_BR',
    type: 'website',
    images: [{ url: '/og.png', width: 1200, height: 630, alt: title }],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: ['/og.png'],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: '#0e0e0e',
  colorScheme: 'dark',
};

const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: site.name,
  jobTitle: site.role,
  url: siteUrl,
  email: `mailto:${site.email}`,
  sameAs: [site.github.href, site.linkedin.href],
  address: {
    '@type': 'PostalAddress',
    addressRegion: 'Minas Gerais',
    addressCountry: 'BR',
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body className={`${plexSans.variable} ${plexCondensed.variable} ${plexMono.variable}`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
