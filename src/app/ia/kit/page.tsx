import type { Metadata } from 'next';
import { kit } from '@/content/kit';
import IaHeader from '@/components/ia/IaHeader';
import IaFooter from '@/components/ia/IaFooter';
import KitPage from '@/components/ia/kit/KitPage';

export const metadata: Metadata = {
  title: kit.meta.title,
  description: kit.meta.description,
  alternates: { canonical: kit.meta.url },
  openGraph: {
    title: kit.meta.title,
    description: kit.meta.description,
    url: kit.meta.url,
    siteName: 'Emery Piqueras',
    locale: 'es_ES',
    type: 'website',
    images: [{ url: kit.meta.ogImage, width: 1200, height: 630, alt: kit.meta.title }],
  },
};

export default function IaKitRoute() {
  return (
    <div className="font-sans text-[#F5F5F3]">
      <IaHeader />
      <main>
        <KitPage />
      </main>
      <IaFooter />
    </div>
  );
}
