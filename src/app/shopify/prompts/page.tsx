import type { Metadata } from 'next';
import { prompts } from '@/content/prompts';
import Header from '@/components/shopify/Header';
import Footer from '@/components/shopify/Footer';
import PromptsGatekeeper from '@/components/shopify/prompts/PromptsGatekeeper';

export const metadata: Metadata = {
  title: prompts.meta.title,
  description: prompts.meta.description,
  alternates: {
    canonical: prompts.meta.url,
  },
  openGraph: {
    title: prompts.meta.title,
    description: prompts.meta.description,
    url: prompts.meta.url,
    siteName: 'Emery Piqueras',
    locale: 'es_ES',
    type: 'website',
    images: [
      {
        url: prompts.meta.ogImage,
        width: 1200,
        height: 630,
        alt: prompts.meta.title,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: prompts.meta.title,
    description: prompts.meta.description,
    images: [prompts.meta.ogImage],
  },
};

export default function PromptsPage() {
  return (
    <div className="font-sans text-[#F5F5F3]">
      <Header />
      <main>
        <PromptsGatekeeper />
      </main>
      <Footer />
    </div>
  );
}
