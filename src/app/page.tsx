import Header from '@/components/Header';
import Hero from '@/components/Hero';
import LogosStrip from '@/components/LogosStrip';
import WhatIDo from '@/components/WhatIDo';
import Trajectory from '@/components/Trajectory';
import AboutMe from '@/components/AboutMe';
import Projects from '@/components/Projects';
import Education from '@/components/Education';
import FinalCta from '@/components/FinalCta';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main id="contenido">
        <Hero />
        <LogosStrip />
        <WhatIDo />
        <Trajectory />
        <AboutMe />
        <Projects />
        <Education />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
