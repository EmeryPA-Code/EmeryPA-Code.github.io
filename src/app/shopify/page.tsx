import Header from '@/components/shopify/Header';
import FloatingNav from '@/components/shopify/FloatingNav';
import Hero from '@/components/shopify/Hero';
import LogosMarquee from '@/components/shopify/LogosMarquee';
import ProblemsBento from '@/components/shopify/ProblemsBento';
import SolutionsSection from '@/components/shopify/SolutionsSection';
import Calculator from '@/components/shopify/Calculator';
import GuaranteeCard from '@/components/shopify/GuaranteeCard';
import CaseStudies from '@/components/shopify/CaseStudies';
import Methodology from '@/components/shopify/Methodology';
import ComplementaryServices from '@/components/shopify/ComplementaryServices';
import FaqAccordion from '@/components/shopify/FaqAccordion';
import FinalCta from '@/components/shopify/FinalCta';
import Footer from '@/components/shopify/Footer';

export default function ShopifyPage() {
  return (
    <div className="font-sans text-[#F5F5F3]">
      <Header />
      <FloatingNav />
      <main>
        <Hero />
        <LogosMarquee />
        <ProblemsBento />
        <SolutionsSection />
        <Calculator />
        <GuaranteeCard />
        <CaseStudies />
        <Methodology />
        <ComplementaryServices />
        <FaqAccordion />
        <FinalCta />
      </main>
      <Footer />
    </div>
  );
}
