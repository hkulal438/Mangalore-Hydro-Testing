import ScrollProgress from '@/components/ScrollProgress';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import WhyChooseUs from '@/components/WhyChooseUs';
import Stats from '@/components/Stats';
import Services from '@/components/Services';
import Equipment from '@/components/Equipment';
import HydroTestingProcess from '@/components/HydroTestingProcess';
import AdvancedTesting from '@/components/AdvancedTesting';
import CertifiedTechnicians from '@/components/CertifiedTechnicians';
import SafetyCompliance from '@/components/SafetyCompliance';
import Vehicles from '@/components/Vehicles';
import FAQ from '@/components/FAQ';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import Location from '@/components/Location';
import Footer from '@/components/Footer';
import FloatingActions from '@/components/FloatingActions';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <ScrollProgress />
      <Header />
      <main>
        <Hero />
        <About />
        <WhyChooseUs />
        <Stats />
        <Services />
        <Equipment />
        <HydroTestingProcess />
        <AdvancedTesting />
        <CertifiedTechnicians />
        <SafetyCompliance />
        <Vehicles />
        <FAQ />
        <Testimonials />
        <Contact />
        <Location />
      </main>
      <Footer />
      <FloatingActions />
    </div>
  );
}
