import IaHeader from '@/components/ia/IaHeader';
import IaFooter from '@/components/ia/IaFooter';
import IaContact from '@/components/ia/IaContact';
import { IaHero, IaServices, IaProjects, IaMethod, IaYouTube, IaKitBanner, IaFaq } from '@/components/ia/IaSections';

export default function IaPage() {
  return (
    <div className="font-sans text-[#F5F5F3]">
      <IaHeader />
      <main>
        <IaHero />
        <IaServices />
        <IaProjects />
        <IaMethod />
        <IaYouTube />
        <IaKitBanner />
        <IaFaq />
        <IaContact />
      </main>
      <IaFooter />
    </div>
  );
}
