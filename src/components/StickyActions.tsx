import { useEffect, useState } from 'react';
import { Phone, CalendarCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import { COMPANY } from '../lib/content';

export default function StickyActions() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="pointer-events-none">
      {/* Desktop: floating Get Estimate pill — bottom-right, non-obstructive */}
      <Link
        to="/free-estimate"
        aria-label="Get a free estimate"
        className={`pointer-events-auto fixed bottom-6 right-6 z-40 hidden items-center gap-2 rounded-full bg-blue-500 px-6 py-3.5 text-sm font-bold text-white shadow-card-hover transition-all duration-500 hover:bg-blue-600 focus:outline-none focus-visible:ring-4 focus-visible:ring-blue-200 lg:inline-flex ${
          show ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-16 opacity-0'
        }`}
      >
        <CalendarCheck className="h-5 w-5" />
        Get Estimate
      </Link>

      {/* Mobile: sticky call+estimate bar */}
      <div
        className={`fixed bottom-0 left-0 right-0 z-40 flex gap-3 border-t border-gray-200 bg-white/95 px-4 pt-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))] glass transition-transform duration-500 lg:hidden ${
          show ? 'translate-y-0' : 'translate-y-full'
        }`}
      >
        <a
          href={`tel:${COMPANY.phoneRaw}`}
          aria-label={`Call Terrano Plumbing at ${COMPANY.phone}`}
          className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-navy-800 py-3.5 text-sm font-bold text-white transition-colors active:scale-95 focus:outline-none focus-visible:ring-4 focus-visible:ring-navy-200"
        >
          <Phone className="h-5 w-5" />
          Call Now
        </a>
        <Link
          to="/free-estimate"
          aria-label="Request a free estimate"
          className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-blue-500 py-3.5 text-sm font-bold text-white shadow-glow transition-colors active:scale-95 focus:outline-none focus-visible:ring-4 focus-visible:ring-blue-200"
        >
          <CalendarCheck className="h-5 w-5" />
          Free Estimate
        </Link>
      </div>
    </div>
  );
}
