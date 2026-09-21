import type { Metadata } from 'next';
import { Space_Grotesk } from 'next/font/google';
import { shopify } from '@/content/shopify';
import Providers from '@/components/shopify/Providers';
import './shopify.css';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
});

export const metadata: Metadata = {
  title: shopify.meta.title,
  description: shopify.meta.description,
  alternates: {
    canonical: shopify.meta.url,
  },
  openGraph: {
    title: shopify.meta.title,
    description: shopify.meta.description,
    url: shopify.meta.url,
    siteName: 'Emery Piqueras',
    locale: 'es_ES',
    type: 'website',
    images: [
      {
        url: shopify.meta.ogImage,
        width: 1200,
        height: 630,
        alt: shopify.meta.title,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: shopify.meta.title,
    description: shopify.meta.description,
    images: [shopify.meta.ogImage],
  },
};

export default function ShopifyLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={`${spaceGrotesk.variable} bg-[#0B0B0C] min-h-screen`}>
      <Providers>{children}</Providers>
    </div>
  );
}
