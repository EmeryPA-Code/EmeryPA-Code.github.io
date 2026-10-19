import type { Metadata } from 'next';
import { checklist } from '@/content/checklist';
import Header from '@/components/shopify/Header';
import Footer from '@/components/shopify/Footer';
import ChecklistApp from '@/components/shopify/checklist/ChecklistApp';

export const metadata: Metadata = {
  title: checklist.meta.title,
  description: checklist.meta.description,
  alternates: {
    canonical: checklist.meta.url,
  },
  openGraph: {
    title: checklist.meta.title,
    description: checklist.meta.description,
    url: checklist.meta.url,
    siteName: 'Emery Piqueras',
    locale: 'es_ES',
    type: 'website',
    images: [
      {
        url: checklist.meta.ogImage,
        width: 1200,
        height: 630,
        alt: checklist.meta.title,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: checklist.meta.title,
    description: checklist.meta.description,
    images: [checklist.meta.ogImage],
  },
};

export default function ChecklistPage() {
  return (
    <div className="font-sans text-[#F5F5F3]">
      <Header />
      <main>
        <ChecklistApp />
      </main>
      <Footer />
    </div>
  );
}
