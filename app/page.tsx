import Navbar from '@/components/Navbar';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Services from '@/components/sections/Services';
import Portfolio from '@/components/sections/Portfolio';
import FAQ from '@/components/sections/FAQ';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/Footer';
import LightPillarBackground from '@/components/LightPillarBackground';

export default function Home() {
  return (
    <main className="min-h-screen relative">
      <LightPillarBackground />
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <FAQ />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
