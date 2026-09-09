import type { Metadata } from 'next';
import { IBM_Plex_Mono, IBM_Plex_Sans, IBM_Plex_Sans_Condensed } from 'next/font/google';
import './globals.css';

const plexSans = IBM_Plex_Sans({ variable: '--font-plex-sans', subsets: ['latin'], weight: ['300', '400', '500', '600'] });
const plexCondensed = IBM_Plex_Sans_Condensed({ variable: '--font-plex-condensed', subsets: ['latin'], weight: ['400', '500', '600'] });
const plexMono = IBM_Plex_Mono({ variable: '--font-plex-mono', subsets: ['latin'], weight: ['400', '500'] });

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL
  ?? (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : 'http://localhost:3000');

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Gabriel Lopes — Desenvolvedor Full Stack',
  description: 'Portfólio de Gabriel Lopes, desenvolvedor full stack especializado em produtos digitais claros, rápidos e funcionais.',
  openGraph: {
    title: 'Gabriel Lopes — Desenvolvedor Full Stack',
    description: 'Produtos digitais claros, rápidos e funcionais.',
    images: [{ url: '/og.png', width: 1200, height: 630, alt: 'Desenvolvo produtos digitais claros e funcionais.' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gabriel Lopes — Desenvolvedor Full Stack',
    description: 'Produtos digitais claros, rápidos e funcionais.',
    images: ['/og.png'],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR"><body className={`${plexSans.variable} ${plexCondensed.variable} ${plexMono.variable}`}>{children}</body></html>;
}
