import { MapPin, Phone, CheckCircle2 } from 'lucide-react';
import PageHero from '../components/PageHero';
import CTASection from '../components/CTASection';
import { COMPANY } from '../lib/content';
import { useReveal } from '../hooks/useReveal';

const AREAS = COMPANY.serviceAreas;

export default function ServiceAreas() {
  const { ref, visible } = useReveal();
  return (
    <>
      <PageHero
        icon={MapPin}
        eyebrow="Service Areas"
        title="Where We Serve"
        intro="Based in Boca Raton, we provide plumbing and remodeling services to homes and businesses across Palm Beach and Broward Counties."
      />

      <section className="bg-white py-20 lg:py-24">
        <div className="mx-auto max-w-5xl px-5 lg:px-8">
          <div ref={ref} className={`reveal ${visible ? 'is-visible' : ''} grid gap-4 sm:grid-cols-2 lg:grid-cols-3`}>
            {AREAS.map((area) => (
              <div
                key={area}
                className="flex items-center gap-3 rounded-2xl border border-gray-100 bg-white p-5 shadow-soft transition-all duration-300 hover:border-blue-100 hover:shadow-card"
              >
                <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-success-600" />
                <span className="text-sm font-bold text-navy-800">{area}</span>
              </div>
            ))}
          </div>

          <div className="mt-12 rounded-3xl bg-gray-50 p-8 text-center">
            <p className="text-lg font-bold text-navy-800">Don\u2019t see your city?</p>
            <p className="mt-2 text-sm text-gray-600">
              We serve surrounding communities as well. Call us to confirm we cover your area.
            </p>
            <a
              href={`tel:${COMPANY.phoneRaw}`}
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-navy-800 px-6 py-3.5 text-sm font-bold text-white transition-colors hover:bg-navy-700 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-navy-200"
            >
              <Phone className="h-4 w-4" />
              {COMPANY.phone}
            </a>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
