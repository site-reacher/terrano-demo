import Hero from '../components/Hero';
import Services from '../components/Services';
import WhyChooseUs from '../components/WhyChooseUs';
import Gallery from '../components/Gallery';
import Testimonials from '../components/Testimonials';
import Process from '../components/Process';
import About from '../components/About';
import FAQ from '../components/FAQ';
import CTASection from '../components/CTASection';

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <WhyChooseUs />
      <Gallery />
      <Testimonials />
      <Process />
      <About />
      <FAQ />
      <CTASection />
    </>
  );
}
