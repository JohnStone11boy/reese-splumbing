import Header from './components/Header';
import Hero from './components/Hero';
import TrustBanner from './components/TrustBanner';
import About from './components/About';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import Reviews from './components/Reviews';
import Gallery from './components/Gallery';
import EmergencyBanner from './components/EmergencyBanner';
import ServiceArea from './components/ServiceArea';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingCallButton from './components/FloatingCallButton';

export default function App() {
  return (
    <div className="min-h-screen font-sans">
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[999] focus:bg-brand focus:text-white focus:px-4 focus:py-2 focus:rounded-lg">
        Skip to main content
      </a>
      <Header />
      <main id="main-content">
        <Hero />
        <TrustBanner />
        <About />
        <Services />
        <WhyChooseUs />
        <Reviews />
        <Gallery />
        <EmergencyBanner />
        <ServiceArea />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <FloatingCallButton />
    </div>
  );
}
