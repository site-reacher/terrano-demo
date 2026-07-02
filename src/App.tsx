import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import StickyActions from './components/StickyActions';
import ScrollToTop from './components/ScrollToTop';
import PrivacyModal from './components/PrivacyModal';
import TermsModal from './components/TermsModal';
import Home from './pages/Home';
import ServiceAreas from './pages/ServiceAreas';
import PlumbingServices from './pages/PlumbingServices';
import ServiceDetail from './pages/ServiceDetail';
import Remodeling from './pages/Remodeling';
import SpecialOffers from './pages/SpecialOffers';
import Blog from './pages/Blog';
import About from './pages/About';
import FreeEstimate from './pages/FreeEstimate';

export default function App() {
  const [privacyOpen, setPrivacyOpen] = useState(false);
  const [termsOpen, setTermsOpen] = useState(false);

  useEffect(() => {
    const onHash = () => {
      const hash = window.location.hash;
      if (hash === '#privacy') { setPrivacyOpen(true); setTermsOpen(false); }
      else if (hash === '#terms') { setTermsOpen(true); setPrivacyOpen(false); }
    };
    onHash();
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="flex min-h-screen flex-col bg-white">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/service-areas" element={<ServiceAreas />} />
            <Route path="/plumbing-services" element={<PlumbingServices />} />
            <Route path="/plumbing-services/:slug" element={<ServiceDetail />} />
            <Route path="/remodeling" element={<Remodeling />} />
            <Route path="/special-offers" element={<SpecialOffers />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/about" element={<About />} />
            <Route path="/free-estimate" element={<FreeEstimate />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </main>
        <Footer />
        <StickyActions />
        <PrivacyModal open={privacyOpen} onClose={() => setPrivacyOpen(false)} />
        <TermsModal open={termsOpen} onClose={() => setTermsOpen(false)} />
      </div>
    </BrowserRouter>
  );
}
