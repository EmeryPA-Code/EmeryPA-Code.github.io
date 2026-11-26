import type { Metadata } from 'next';
import { Space_Grotesk } from 'next/font/google';
import { ia } from '@/content/ia';
import Providers from '@/components/shopify/Providers';
import '../shopify/shopify.css';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
});

export const metadata: Metadata = {
  title: ia.meta.title,
  description: ia.meta.description,
  alternates: { canonical: ia.meta.url },
  openGraph: {
    title: ia.meta.title,
    description: ia.meta.description,
    url: ia.meta.url,
    siteName: 'Emery Piqueras',
    locale: 'es_ES',
    type: 'website',
    images: [{ url: ia.meta.ogImage, width: 1200, height: 630, alt: ia.meta.title }],
  },
  twitter: {
    card: 'summary_large_image',
    title: ia.meta.title,
    description: ia.meta.description,
    images: [ia.meta.ogImage],
  },
};

export default function IaLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={`${spaceGrotesk.variable} bg-[#0B0B0C] min-h-screen`}>
      <Providers>{children}</Providers>
    </div>
  );
}
